/*
* 问题cell
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

class TopicCellComponent extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       typeIcon : {uri:this.props.topicModel.topicTypeImg},
	       contentImg : {uri:this.props.topicModel.quesImg},
	    }
	}

	render(){
		return(
			<View style={styles.cellParView}>
				<TouchableOpacity activeOpacity = {0.8} onPress={this.props.onTopicIconPress}>
					<View style = {styles.cellView1}>
						<Image 
							style = {styles.cellUserIcon} 
							source = {this.state.typeIcon}
							resizeMode = 'contain' />
							  
						<Text style = {styles.cellUserName}>来自话题：{this.props.topicModel.topicTypeName}</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity activeOpacity = {0.8} onPress={this.props.onTopicCellPress}>
					<View>
						<Text style = {styles.cellQusText}>{this.props.topicModel.topicDes}</Text>
					</View>
					<View>
						<Image style = {styles.cellImg} source={this.state.contentImg} />
					</View>
					<View style = {styles.cellView1}>
						<Text style = {[styles.cellAttenQus,{flex:1}]}>{this.props.topicModel.attentionNum}人关注，{this.props.topicModel.answerNum}人回答</Text>
						<View style = {{alignItems:'flex-end',flex:1}}>
							<Text style = {[styles.cellAttenQus,{marginRight:10}]}>文章</Text>
						</View>
					</View>
				</TouchableOpacity>
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

module.exports = TopicCellComponent;




