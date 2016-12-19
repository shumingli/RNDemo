
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigate,
  TouchableOpacity,
} from 'react-native';

var Util = require('./util.js');
var TabComponent = require('./tabComponent.js');
var BottomBar = require('./bottomBar.js');
var HomePage = require('./homePage.js');
var FindPage = require('./findPage.js');
var AttentionPage = require('./attentionPage.js');
var MyPage = require('./myPage.js');

var tabList = ['首页','发现','关注','我的'];
var viewList = [HomePage,FindPage,AttentionPage,MyPage];

export default class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : tabList[0],
			selectIndex : 1,
			item : (<HomePage style={{flex:20,justifyContent: 'flex-start',}} />)
		}
	};
	_onTabPress = (index)=>{
		console.log(tabList[index-1]);
		let item;
		if (index == 1) {
			item = (<HomePage style={{flex:20,justifyContent: 'flex-start',}} />);
		}else if(index == 2){
			item = (<FindPage style={{flex:20,justifyContent: 'flex-start',}} />);
		}else if(index == 3){
			item = (<AttentionPage style={{flex:20,justifyContent: 'flex-start',}} />);
		}else{
			item = (<MyPage style={{flex:20,justifyContent: 'flex-start',}} />);
		};
		this.setState({
			title : tabList[index-1],
			selectIndex : index,
			item : item,
		});
		
	};

	render(){ 
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent 
						style={{flex:54}}
						title={this.state.title} />
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
		backgroundColor: 'white',  //white
		marginTop: 20,
	},
});

module.exports = MainPage;







