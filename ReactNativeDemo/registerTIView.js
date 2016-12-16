/*
* 注册页面
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  View,
  TextInput,
} from 'react-native';

class RegisterTIView extends Component {
	render(){
		return(
			<View> 
				<View style={tiViewStyles.containView}>
		          <Image style={tiViewStyles.contactIcon} source={this.props.source} />
		          <TextInput onChangeText={this.props.onChangeText} 
		          style={tiViewStyles.textInputStyle} 
		          placeholder={this.props.placeholder} />
		        </View>
		        <View style={tiViewStyles.line} />
			</View>
		);
	}
}

var tiViewStyles = StyleSheet.create({
	containView: {
	    flexDirection:'row',
	    height:54,
	},
	contactIcon: {
		marginTop:30, 
		marginLeft:25,
	},
	textInputStyle: {
	    width:200,
		height:54,
		fontSize:18,
		color:'#444444',
		marginTop:10, 
		marginLeft:10,
	},
	line: {
	    height:1, 
	    marginLeft:20,
	    marginRight:20,
	    backgroundColor:'#eeeeee'
	},
});

module.exports = RegisterTIView;
