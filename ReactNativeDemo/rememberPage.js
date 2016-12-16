/*
* 忘记密码界面
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

var TabComponent = require('./tabComponent.js');

export default class RememberPage extends Component {
	onBack = ()=>{
		this.props.navigator.pop();
	}
	render(){
		return(
			<View style={styles.container}>
				<TabComponent title='找回密码' leftBtnTitle='< 返回' onLeftBtnPress={this.onBack} />
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

module.exports = RememberPage;





