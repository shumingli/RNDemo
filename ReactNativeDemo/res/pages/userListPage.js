/*
* 话题列表页
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  ListView,
  RefreshControl,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

var TopicTypeCellComponent = require('../components/topicTypeCellComponent.js');
var UserCellComponent = require('../components/userCellComponent.js');
var TopicTypeModel = require('../models/topicTypeModel.js');
var TopicDetailPage = require('../pages/topicDetailPage.js');
var UserModel = require('../models/userModel.js');

export default class UserListPage extends BaseNavigatePage {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged:(r1,r2)=>r1 !== r2
		});
		this._data = []; 
		this.state = {
			dataSource: ds.cloneWithRows(this._data),
			isLoadingMore: false,
			curIndex: 0,
			headLoading: false,
		};

		this._loadMoreData = this._loadMoreData.bind(this);
		this._loadMoreData();
	}

	componentDidMount(){
		// this._loadMoreData();
	}

	_loadMoreData(){
		var self = this;

    	if (self.state.curIndex == 0) {
    		self.setState['headLoading'] = true;
    	};
		self.setState['isLoadingMore'] = true;
		let params = {
	        userId : '1',
	        index: this.state.curIndex,
	    };
		HttpUtil.request('get',ServerInterConfig.attentionUserList,params,function (resObj) {
	        //下面的就是请求来的数据
	        if (resObj['code'] == 1) {
	        	dataArray = resObj['data'];
	        	console.log("返回数据：");
	        	console.log(dataArray);
	        	var newData = [];
	        	for (var i = 0; i < dataArray.length; i++) {
	        		var item = dataArray[i];
	        		var model = new UserModel(item);
	        		newData[i] = model;
	        	};
	        	if (self.state.curIndex == 0) {
	        		self._data = newData;
	        	}else{
	        		self._data = self._data.concat(newData);
	        	}
	        	
				self.setState({
				    dataSource: self.state.dataSource.cloneWithRows(self._data),
					isLoadingMore: false,
					curIndex: self._data.length,
					headLoading: false,
				});
	        } 
	    })
	}

	// onEndReachedThreshold，在滚动即将到达底部时触发； 
	// onEndReached，在已经到达底部时触发；
	_toEnd() {
		console.log("toEnd() --> ");
		var self = this;
		if (this.state.isLoadingMore) {
			return;
		} 
		InteractionManager.runAfterInteractions(() => {
            console.log("触发加载更多 toEnd() --> ");
			self._loadMoreData();
        });
    }
    _onTopicIconPress(rowData){
    	this._navigate(TestPage);
    }
    _onTopicCellPress(rowData){
    	console.log(rowData.topicId);
    	this._navigate(TopicDetailPage);
    }
    _renderRow(rowData){
    	return <UserCellComponent userModel = {rowData} />
    				
    }
    _onRefresh(){
    	this.state.curIndex = 0;
    	this._loadMoreData();
    }
	render(){
		return(
			<View style={styles.container}>
				<ListView 
					refreshControl = {
						<RefreshControl
							onRefresh = {this._onRefresh.bind(this) }
							refreshing = {this.state.headLoading }
							tintColor = '#ff0000'
							title = '正在刷新...'
							colors = {['#ff0000','#00ff00','#0000ff']}
							progressBackgroundColor = '#ffff00' />
					}
					dataSource = {this.state.dataSource}
					renderRow = {this._renderRow.bind(this) }
					onEndReached = { this._toEnd.bind(this) }
					onEndReachedThreshold  = {50}
					enableEmptySections = {true}  />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
	},
});

module.exports = UserListPage;





