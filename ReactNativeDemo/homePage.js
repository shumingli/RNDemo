
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

var Util = require('./util.js');

export default class HomePage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<Text>首页————</Text>
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
		justifyContent: 'flex-start',
		backgroundColor: 'white',  //white
		marginTop: 20,
	},
});

module.exports = HomePage;







