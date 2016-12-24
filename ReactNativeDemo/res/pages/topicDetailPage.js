/*
* 搜索界面
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native';

export default class TopicDetailPage extends Component {
	onBack = ()=>{
		this.props.navigator.pop();
	}
	render(){
		return(
			<View style={styles.container}>
				<TabComponent title='搜索' leftBtnTitle='< 返回' onLeftBtnPress={this.onBack} />
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

module.exports = TopicDetailPage;





