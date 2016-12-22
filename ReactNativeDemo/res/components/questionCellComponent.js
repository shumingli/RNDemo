/*
* 问题cell
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

class QuestionCellComponent extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }
	}

	render(){
		return(
			<View style={styles.cellParView}>
				<View style = {styles.cellView1}>
					<Image style = {styles.cellUserIcon} source={require('image!my_icon')} />
					<Text style = {styles.cellUserName}>{this.props.userName}</Text>
				</View>
				<View>
					<Text style = {styles.cellQusText}>{this.props.questionTxt}</Text>
				</View>
				<View>
					<Image style = {styles.cellImg} source={require('image!topic_qusbg')} />
				</View>
				<View style = {styles.cellView1}>
					<Text style = {[styles.cellAttenQus,{flex:1}]}>10人关注，99人回答</Text>
					<View style = {{alignItems:'flex-end',flex:1}}>
						<Text style = {[styles.cellAttenQus,{marginRight:10}]}>文章</Text>
					</View>
				</View>
				<View style = {CommonStylesConfig.styles.line10sp} />
			</View>
		);
	}
}

var styles = StyleSheet.create({
	cellParView: {

	},
	cellView1: {
		flexDirection:'row',
		alignItems: 'center',
	},
	cellUserIcon: {
		marginTop: 10,
	    marginLeft: 10,
	    borderRadius: 15, 
	    height: 30,
	    width: 30,
	},
	cellUserName: {
		color: '#999999',
	    marginTop: 10,
	    marginLeft: 10,
	    fontSize: 14,
	},
	cellQusText: {
		fontWeight:'bold',
		color: '#000000',
	    marginTop: 10,
	    marginLeft: 10,
	    fontSize: 18,
	    width: Util.ScreenWidth-20,
	},
	cellImg: {
		marginLeft: 10,
		marginTop: 10,
		width: Util.ScreenWidth-20,
		height: (Util.ScreenWidth-20)*0.37,
	},
	cellAttenQus: {
		color: '#999999',
	    marginTop: 10,
	    marginLeft: 10,
	    fontSize: 14,
	},
});

module.exports = QuestionCellComponent;




