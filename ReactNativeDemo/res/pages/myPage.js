
/*
 * 我的页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Navigate,
  TouchableOpacity,
} from 'react-native';

var Util = require('../utils/util.js');

export default class MyPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<Text>我的————</Text>
				</View>
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

module.exports = MyPage;






