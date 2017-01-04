
/*
 * 发现
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Navigate,
  ListView,
  TouchableOpacity,
} from 'react-native';

var ImageButton = require('../controls/ImageButton.js');
var TopicCellComponent = require('../components/topicCellComponent.js');
var TopicModel = require('../models/topicModel.js');
var TopicTypeModel = require('../models/topicTypeModel.js');
var TopicDetailPage = require('../pages/topicDetailPage.js');

export default class FindPage extends BaseNavigatePage {
	constructor(props){
		super(props);

		var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };

		const ds = new ListView.DataSource({
			getRowData: getRowData,
            getSectionHeaderData: getSectionData,
			sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
			rowHasChanged:(r1,r2)=>r1 !== r2,
		});
		sIds = ["s1","s2"];
		rIds = [[],[]];
		this._data = {s1:"s1",s2:"s2"}; 
		this.state = {
			dataSource: ds.cloneWithRowsAndSections(this._data,sIds,rIds),
			isLoadingMore: false,
			curIndex: 0,
			sectionIds: rIds,

		};
		this._loadMoreData.bind(this);
		this._loadMoreData();

		this._topicTypeList();
	}

	_loadMoreData(){
		console.log("ssssssssssss")
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
	        	var newData = {};
	        	var rowIds = [[],[]];
	        	
	        	for (var i = 0; i < dataArray.length; i++) {
	        		var item = dataArray[i];
	        		var model = new TopicModel(item);
	        		var rid = "S1Row"+i;
	        		rowIds[0].push(rid);
	        		self._data[rid] = model;
	        	};
	        	for (var j = 0; j < dataArray.length; j++) {
	        		var item = dataArray[j];
	        		var model = new TopicModel(item);
	        		var rid = "S2Row"+j;
	        		rowIds[1].push(rid);
	        		self._data[rid] = model;
	        	};
	        	
				var sIds = ["s1","s2"];
				self.setState({
				    dataSource: self.state.dataSource.cloneWithRowsAndSections(self._data,sIds,rowIds),
					isLoadingMore: false,
					curIndex: 0,
					sectionIds: sIds,
				});
				console.log('test');
				console.log(self.state.dataSource);
	        } 
	    })
	}

	//分类item 点击事件
	_topicTypeItemClick(index){

	}
	_onTopicIconPress(rowData){
    	console.log('tttt');
    	console.log(rowData.topicId);
    	
    }
    _onTopicCellPress(rowData){
    	console.log(rowData.topicId);
    	this._navigate(TopicDetailPage);
    }
	_renderRow(rowData,sid,rid){
    	return <TopicCellComponent 
    		onTopicIconPress = {this._onTopicIconPress.bind(this,rowData)}
    		onTopicCellPress = {this._onTopicCellPress.bind(this,rowData)}
			topicModel = {rowData}  />
    }

    _titleComponent(title){
    	return (
    		<View style = {{backgroundColor: 'white'}}>
		    	<View style = {styles.titleContainer}> 
					<View style = {styles.titleRadPoint} />
					<Text style = {styles.titleStyle}>{title}</Text>
				</View>
			</View>
		);
    }

    _topicTypeList(){
    	var self = this;
    	let params = {
	        userId : '1',
	        index: 0,
	    };
		HttpUtil.request('get',ServerInterConfig.topicTypeList,params,function (resObj) {
	        //下面的就是请求来的数据
	        if (resObj['code'] == 1) {
	        	dataArray = resObj['data'];
	        	console.log(dataArray);
	        	var newData = [];
	        	for (var i = 0; i < dataArray.length; i++) {
	        		var item = dataArray[i];
	        		var model = new TopicTypeModel(item);
	        		newData[i] = model;
	        	};
	        	self.setState({topicTypeList: newData});
	        } 
	    })
    }

    _createItem(index){
    	var typeItems = [];
    	if (this.state.topicTypeList != null && this.state.topicTypeList.length >= index+2) {
	        for (var i=index; i<index+3; i++) {
	        	var topicModel = this.state.topicTypeList[i];
	        	var icon = {uri: topicModel.topicTypeImg}
	            var text = (
	                <TouchableOpacity
	                	key = {"item"+i}
					    style = {styles.typeItemContainerStyle}
					    onPress = {this._topicTypeItemClick.bind(this,i)}  >
					    <Image
					      	style = {styles.typeItemImageStyle}
					      	source = {icon} />
					    <Text style = {styles.typeItemTextStyle}>{topicModel.topicTypeName}</Text>
					</TouchableOpacity>
	            );
	            //将传过来的数组内容放到新的数组中
	            typeItems.push(text);
	        }
        };
        return (<View style = {{flexDirection:'row',marginTop: 10}}>
					{typeItems}
				</View>);
    }

    _renderHeader(){
		return (
    		<View> 
				{this._titleComponent('精彩分类')}
				{this._createItem(0)}
				{this._createItem(3)}
    		</View>
    	);

    }
    
    _renderSectionHeader(sectionData, sectionId){
    	var title = '热门帖子';
    	if (sectionId == 's1') {
    		title = '热门文章';
    	};
    	return (
			 this._titleComponent(title)
		);
    }
    
	render(){
		return(
			<View style={styles.container}>
				<ListView 
					dataSource = {this.state.dataSource}
					renderHeader = {this._renderHeader.bind(this)} 
					renderSectionHeader = {this._renderSectionHeader.bind(this)}
					renderRow = {this._renderRow.bind(this)}
					onEndReachedThreshold = {50}
					enableEmptySections = {true}  />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	},
	containerTop: {
		flex: Util.ScreenHeight-74,
		justifyContent: 'flex-start',
		backgroundColor: 'white',  //white
		marginTop: 20,
	},
	titleContainer: {
		flexDirection: 'row',
		marginTop: 20,
		marginLeft: 10,
		marginBottom: 10,
		alignItems:'center',
	},
	titleRadPoint: {
		width: 10,
		height: 10,
		borderRadius: 5, 
		backgroundColor: ColorsConfig.mainColor
	},
	titleStyle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: '#666666',
		marginLeft: 5,
	},
	typeItemContainerStyle: {
		flex: 1,
		alignItems: 'center',

	},
	typeItemImageStyle: {
		width: 80,
		height: 80,
		borderRadius: 40,
	},
	typeItemTextStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: 5,
		color: '#666666',
	}

});

module.exports = FindPage;







