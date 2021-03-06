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

export default class SearchPage extends Component {
	onBack = ()=>{
		this.props.navigator.pop();
	}
	render(){
		return(
			<View style={styles.container}>
				<TabComponent 
					title='搜索' 
					leftItem={ComponentConfig.backImage}
					onLeftBtnPress={this.onBack} />
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





