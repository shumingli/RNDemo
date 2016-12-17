
/*
 * 关注页
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

export default class AttentionPage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<View style={styles.containerTop}>
					<Text>关注页</Text>
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

module.exports = AttentionPage;







