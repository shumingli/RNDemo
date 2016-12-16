
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

export default class HomePage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<TabComponent title='888' />
				</View>
				<BottomBar  />
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

module.exports = HomePage;







