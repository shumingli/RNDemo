
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  Alert,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

var TopicCellComponent = require('../components/topicCellComponent.js');
var TopicModel = require('../models/topicModel.js');
var TopicDetailPage = require('../pages/topicDetailPage.js');

var TestPage = require('../pages/testPage.js');

export default class HomePage extends BaseNavigatePage {
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
		};

		this._loadMoreData = this._loadMoreData.bind(this);
		this._loadMoreData();
	}

	componentDidMount(){
		// this._loadMoreData();
	}

	_loadMoreData(){
		var self = this;
		self.setState['isLoadingMore'] = true;
		let params = {
	        userId : '1',
	        index: this.state.curIndex,
	    };
		HttpUtil.request('get',ServerInterConfig.topicList,params,function (resObj) {
	        //下面的就是请求来的数据
	        if (resObj['code'] == 1) {
	        	dataArray = resObj['data'];
	        	var newData = [];
	        	for (var i = 0; i < dataArray.length; i++) {
	        		var item = dataArray[i];
	        		console.log("返回数据：");
	        		console.log(item);
	        		var model = new TopicModel(item);
	        		newData[i] = model;
	        	};
	        	self._data = self._data.concat(newData);
				
				self.setState({
				    dataSource: self.state.dataSource.cloneWithRows(self._data),
					isLoadingMore: false,
					curIndex: self._data.length,
				});
	        } 
	    })
	}

	// onEndReachedThreshold，在滚动即将到达底部时触发； 
	// onEndReached，在已经到达底部时触发；
	_toEnd() {
		console.log("toEnd() --> ");
		var self = this;
          // const { reducer } = this.props;
          // //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
          // if (reducer.isLoadingMore 
          // 	|| reducer.products.length >= reducer.totalProductCount 
          // 	|| reducer.isRefreshing) {
          //     return;
          // };
          // InteractionManager.runAfterInteractions(() => {
          //     console.log("触发加载更多 toEnd() --> ");
          //     this._loadMoreData();
          // });
		if (this.state.isLoadingMore) {
			return;
		} 
		InteractionManager.runAfterInteractions(() => {
            console.log("触发加载更多 toEnd() --> ");
			self._loadMoreData();
        });
    }
    _onTopicIconPress(rowData){
    	console.log('tttt');
    	console.log(rowData.topicId);
    	this._navigate(TestPage);
    }
    _onTopicCellPress(rowData){
    	console.log(rowData.topicId);
    	this._navigate(TopicDetailPage);
    }
    _renderRow(rowData){
    	return <TopicCellComponent 
    		onTopicIconPress = {this._onTopicIconPress.bind(this,rowData)}
    		onTopicCellPress = {this._onTopicCellPress.bind(this,rowData)}
			topicModel = {rowData}  />
		  
    }
	// http://www.jianshu.com/p/dff750d8c425
	render(){
		return(
			<View style={styles.container}>
				<ListView 
					dataSource = {this.state.dataSource}
					renderRow = {this._renderRow.bind(this) }
					onEndReached = { this._toEnd.bind(this) }
					onEndReachedThreshold  = {50}
					enableEmptySections = {true}  />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	},
	
});

module.exports = HomePage;







