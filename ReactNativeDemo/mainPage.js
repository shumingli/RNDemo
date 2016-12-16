
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

var tabList = ['首页','发现','关注','我的'];

export default class MainPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			title : tabList[0],
			selectIndex : 1,
		}
	}

	_onTabPress = (index)=>{
		console.log(tabList[index-1]);
		this.setState({
			title : tabList[index-1],
			selectIndex : index
		});
	
	};

	render(){ 
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent 
						title={this.state.title} />
				</View>
				<BottomBar 
					onTabPress={this._onTabPress} />
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







