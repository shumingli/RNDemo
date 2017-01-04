
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
			isLoadHomePage: true,
			isLoadFindPage: false,
			isLoadAttentionPage: false,
			isLoadMyPage: false,
		}
	};

	_onTabPress = (index)=>{
		console.log(tabList[index-1]);
		let item;
		let rightItem = (<Text style={CommonStylesConfig.styles.tabBarHeadRightText}></Text>);
		switch(index){
			case 1:{

			}
			break;
			case 2:{
				rightItem = (<Image style={{marginRight: 10}} source={require('image!search_icon')} />);
				this.setState({
					isLoadFindPage: true,
				});
			}
			break;
			case 3:{
				this.setState({
					isLoadAttentionPage: true,
				});
			}
			break;
			case 4:{
				this.setState({
					isLoadMyPage: true,
				});
			}
			break;
			default:
			break;
		}

		this.setState({
			title : tabList[index-1],
			selectIndex : index,
			rightItem : rightItem,
		});
	};
	
	_onSearchPress = ()=>{
	    console.log('SearchPage点击');
	    this._navigate(SearchPage);
	};
	_getFindPage(){
		if(this.state.isLoadFindPage){
			return <FindPage navigator={this.props.navigator} />;
		}	
		return null;
	}
	_getAttentionPage(){
		if(this.state.isLoadFindPage){
			return <AttentionPage navigator={this.props.navigator} />;
		}	
		return null;
	}
	_getMyPage(){
		if(this.state.isLoadFindPage){
			return <MyPage navigator={this.props.navigator} />;
		}	
		return null;
	}

	render(){ 
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent 
						style={{height: 54}}
						title={this.state.title} 
						rightItem={this.state.rightItem} 
						onRightBtnPress={this._onSearchPress} />
					<View style={{height: Util.ScreenHeight-128,justifyContent: 'flex-start',}}>
						<View style = {[styles.itemStyle,{zIndex:(this.state.selectIndex == 1?10:0)}]}>
							<HomePage navigator={this.props.navigator} />
						</View>
						<View style = {[styles.itemStyle,{zIndex:(this.state.selectIndex == 2?10:0)}]}>
							{this._getFindPage()}
						</View>
						<View style = {[styles.itemStyle,{zIndex:(this.state.selectIndex == 3?10:0)}]}>
							{this._getAttentionPage()}
						</View>
						<View style = {[styles.itemStyle,{zIndex:(this.state.selectIndex == 4?10:0)}]}>
							{this._getMyPage()}
						</View>
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
		height: Util.ScreenHeight-74, 
		justifyContent: 'flex-start',
		backgroundColor: 'white',  
		marginTop: 20,
	},
	itemStyle: {
		backgroundColor: 'white',  
		position: 'absolute',
		width: Util.ScreenWidth,
		height: Util.ScreenHeight-128, 
	},
	
});

module.exports = MainPage;







