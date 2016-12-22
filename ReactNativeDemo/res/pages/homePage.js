
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

CommonStylesConfig = require('../config/commonStylesConfig.js');
var QuestionCellComponent = require('../components/questionCellComponent.js');

export default class HomePage extends Component {
	render(){
		return(
			<View style={styles.container}>
				<QuestionCellComponent />

			</View>
		)
	}
}

var styles = StyleSheet.create({
	
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	},
	
});

module.exports = HomePage;







