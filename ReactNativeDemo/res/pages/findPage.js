
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
var TopicDetailPage = require('../pages/topicDetailPage.js');

export default class FindPage extends Component {
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
	_itemClick(){

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

    _renderHeader(){
    	var typeItems = [];
	        //这里表示的是遍历其他组件传过来的数组。习惯了java的for循环，js中这个for循环看起来怪怪的
	        var tt = ["1","2","3"];
	        for (var i in tt) {
	            var text = (
	                <TouchableOpacity
	                	key = {"item"+i}
					    style = {styles.typeItemContainerStyle}
					    onPress = {this._itemClick.bind(this)}  >
					    <Image
					      style = {styles.typeItemImageStyle}
					      source = {require('image!topicType_icon1')} />
					    <Text style = {styles.typeItemTextStyle}>教育</Text>
					</TouchableOpacity>
	            );
	            //将传过来的数组内容放到新的数组中
	            typeItems.push(text);
	        }
    		return (
	    		<View> 
					{this._titleComponent('精彩分类')}
					<View style = {{flexDirection:'row',marginTop: 10}}>
						{typeItems}
					</View>
					<View style = {{flexDirection:'row',marginTop: 10}}>
						{typeItems}
					</View>
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
    //ListView 如何使用 http://www.jianshu.com/p/1293bb8ac969
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

	},
	typeItemTextStyle: {
		fontSize: 14,
		fontWeight: 'bold',
		marginTop: 5,
		color: '#666666',
	}

});

module.exports = FindPage;







