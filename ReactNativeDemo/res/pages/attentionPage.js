
/*
 * 关注页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigate,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

var Button = require('../controls/Button.js');
var TabTextItem = require('../controls/tabTextItem.js');
var QuestionListPage = require('../pages/questionListPage.js');
var CollectListPage = require('../pages/collectListPage.js');
var TopicTypeListPage = require('../pages/topicTypeListPage.js');
var UserListPage = require('../pages/userListPage.js');

var tabIds = new Array('Q','C','T','U');
var tabTitles = {Q: '问题',C: '收藏',T: '话题' ,U: '用户'};

export default class AttentionPage extends BaseNavigatePage {
	constructor(props){
	    super(props);
	    this.state = {
	    	selectTab: 'Q',
	    	test: true,
	    }
	    this._scrollView;
	}
	
	_onTabClick(index){
		this.setState({
			selectTab : tabIds[index],
			
		});
		this._scrollView.scrollTo({x:Util.ScreenWidth*index,y:0,animated:true});
	}

	_createItem(){
		var view = [];
		for(var i=0; i<tabIds.length; i++){
			var key = tabIds[i];
			var item = (<TabTextItem
						key = { key }
						text = {tabTitles[key]}
						selectTextStyle = {styles.tabSelectTextStyle}
						unSelectTextStyle = {styles.tabUnSelectTextStyle} 
						containerStyle = {styles.tabContainerStyle} 
						select = {this.state.selectTab === key}
						onPress = {this._onTabClick.bind(this,i)} />);
			view.push(item);
		}
		return view;
	}

	_onScroll(e){
		var index = (e.nativeEvent.contentOffset.x/Util.ScreenWidth);
		var tab = tabIds[Number(index)];  //parseint  Math.floor
		
		var t;
		if (tab != t) {
			this.setState({selectTab: tab});
		};
		
	}
	_onScrollAnimationEnd(e){
		console.log('_onScrollAnimationEnd');
		
	}
	_onContentSizeChange(e){
		console.log('_onContentSizeChange');
		
	}

	render(){
		return(
			<View style = {styles.container}>
				<View style = {{justifyContent: 'center', flexDirection: 'row',}}>
					{this._createItem()}
				</View>
				<View style = {[CommonStylesConfig.styles.line1sp,{marginTop:0}] } />
				<ScrollView 
					ref = {(scrollView)=>{this._scrollView = scrollView}}
					horizontal = {true}
					keyboardDismissMode = 'on-drag'
					onScroll = {this._onScroll.bind(this)}
					onScrollAnimationEnd = {this._onScrollAnimationEnd.bind(this) }
          			scrollEventThrottle = {200}  //onScroll 调用间隔时间
          			onContentSizeChange = {this._onContentSizeChange.bind(this)}
					pagingEnabled = {true} >
						<QuestionListPage navigator={this.props.navigator} />
						<CollectListPage navigator={this.props.navigator} />
						<TopicTypeListPage navigator={this.props.navigator} />
						<UserListPage navigator={this.props.navigator} />
				</ScrollView>
			</View>
		)
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	},
	tabUnSelectTextStyle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: '#666666',
		marginTop: 10,
	},
	tabSelectTextStyle: {
		fontWeight: 'bold',
		fontSize: 18,
		color: ColorsConfig.mainColor,
		marginTop: 10,
	},
	tabContainerStyle: {
		flex: 1,
		alignItems: 'center',

	},
	
});

module.exports = AttentionPage;







