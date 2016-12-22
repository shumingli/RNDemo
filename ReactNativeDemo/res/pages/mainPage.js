
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

var Util = require('../utils/util.js');
var TabComponent = require('../components/tabComponent.js');
var BottomBar = require('../components/bottomBar.js');
var HomePage = require('../pages/homePage.js');
var FindPage = require('../pages/findPage.js');
var AttentionPage = require('../pages/attentionPage.js');
var MyPage = require('../pages/myPage.js');

var tabList = ['首页','发现','关注','我的'];
var viewList = [HomePage,FindPage,AttentionPage,MyPage];

export default class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : tabList[0],
			selectIndex : 1,
			item : (<HomePage style={styles.itemStyle} />),
			rightItem : (<Image style={{marginRight: 10}} source={require('image!search_icon')} />),
		}
	};
	_onTabPress = (index)=>{
		console.log(tabList[index-1]);
		let item;
		let rightItem = (<Text style={styles.headRightText}></Text>);
		if (index == 1) {
			item = (<HomePage style={styles.itemStyle} />);
			rightItem = (<Image style={{marginRight: 10}} source={require('image!search_icon')} />);
		}else if(index == 2){
			item = (<FindPage style={styles.itemStyle} />);
		}else if(index == 3){
			item = (<AttentionPage style={styles.itemStyle} />);
		}else{
			item = (<MyPage style={styles.itemStyle} />);
		};
		this.setState({
			title : tabList[index-1],
			selectIndex : index,
			item : item,
			rightItem : rightItem,
		});
	};

	render(){ 
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent 
						style={{flex:54}}
						title={this.state.title} 
						rightItem={this.state.rightItem} />
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
	headRightText: {
		color: '#1FCAD3',
		fontSize: 16,
		marginRight: 10,
		textAlign:'right',
		fontWeight:'bold',
	},
});

module.exports = MainPage;







