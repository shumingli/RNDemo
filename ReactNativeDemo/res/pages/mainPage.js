
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Navigate,
  TouchableOpacity,
} from 'react-native';

Util = require('../utils/util.js');
HttpUtil = require('../utils/httpUtil.js');
ColorsConfig = require('../config/colorsConfig.js');
ServerInterConfig = require('../config/serverInterConfig.js');
CommonStylesConfig = require('../config/commonStylesConfig.js');
TabComponent = require('../components/tabComponent.js');
BaseNavigatePage = require('../pages/baseNavigatePage.js');
ComponentConfig = require('../config/componentConfig.js');

var BottomBar = require('../components/bottomBar.js');
var HomePage = require('../pages/homePage.js');
var FindPage = require('../pages/findPage.js');
var AttentionPage = require('../pages/attentionPage.js');
var MyPage = require('../pages/myPage.js');
var SearchPage = require('../pages/searchPage.js');

var tabList = ['首页','发现','关注','我的'];
var viewList = [HomePage,FindPage,AttentionPage,MyPage];




export default class MainPage extends BaseNavigatePage {
	constructor(props){
		super(props);
		this.state = {
			title : tabList[0],
			selectIndex : 1,
			item : (<HomePage navigator={this.props.navigator} style={styles.itemStyle} />),
			rightItem : (<Image style={{marginRight: 10}} source={require('image!search_icon')} />),
		}
	};

	_onTabPress = (index)=>{
		console.log(tabList[index-1]);
		let item;
		let rightItem = (<Text style={CommonStylesConfig.styles.tabBarHeadRightText}></Text>);
		if (index == 1) {
			item = (<HomePage navigator={this.props.navigator} style={styles.itemStyle} />);
			rightItem = (<Image style={{marginRight: 10}} source={require('image!search_icon')} />);
		}else if(index == 2){
			item = (<FindPage navigator={this.props.navigator} style={styles.itemStyle} />);
		}else if(index == 3){
			item = (<AttentionPage navigator={this.props.navigator} style={styles.itemStyle} />);
		}else{
			item = (<MyPage navigator={this.props.navigator} style={styles.itemStyle} />);
		};
		this.setState({
			title : tabList[index-1],
			selectIndex : index,
			item : item,
			rightItem : rightItem,
		});
	};
	
	_onSearchPress = ()=>{
	    console.log('SearchPage点击');
	    this._navigate(SearchPage);
	};
	render(){ 
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent 
						style={{flex:54}}
						title={this.state.title} 
						rightItem={this.state.rightItem}
						onRightBtnPress={this._onSearchPress} />
					<View style={{flex:Util.ScreenHeight-128,justifyContent: 'flex-start',}}>
						{this.state.item}
					</View>
				</View>
				<BottomBar onTabPress={this._onTabPress} />
			</View>
		)
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
		backgroundColor: 'white',  
		marginTop: 20,
	},
	itemStyle: {
		flex:20,
		justifyContent: 'flex-start',
	},
	
});

module.exports = MainPage;







