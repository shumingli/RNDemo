/***
 * 底部工具条
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

export default class SearchPage extends Component {
	onBack = ()=>{
		this.props.navigator.pop();
	}
	render(){
		return(
			<View style={styles.container}>
				
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		marginTop: 20,
	},
});

module.exports = SearchPage;





