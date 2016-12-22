
/*
 * 我的页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  Alert,
  ScrollView,
  Navigate,
  TouchableOpacity,
} from 'react-native';

var Util = require('../utils/util.js');
var MyPageCellComponent = require('../components/myPageCellComponent.js'); 

export default class MyPage extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }
	}
	_editInfo=()=>{


	}
	_askCellPress=()=>{
		Alert.alert(
              '提示',
              '点击按钮',
            );

	}

	render(){
		return(
			<ScrollView style={styles.container}>
				<View style={styles.containerTop}>
					<View style={{flex: 70}}>
						<Image style = {styles.userIcon} source={require('image!my_icon')} />
					</View>
					<View style={{flex: Util.ScreenWidth-70-30}}>
						<Text style = {styles.shortInfo}>育儿园老师/作家</Text>
						<View style={{flexDirection:'row',marginLeft:10,marginTop:6}}>
							<View style={{flex:1}}>
								<Text style={styles.numStyle}>10</Text>
								<Text style={styles.wenziStyle}>我关注的人</Text>
							</View>
							<View style={{flex:1}}>
								<Text style={styles.numStyle}>10</Text>
								<Text style={styles.wenziStyle}>关注我的人</Text>
							</View>
						</View>
					</View>
					<TouchableOpacity style = {{flex: 30,justifyContent: 'center'}} onPress={this._editInfo}>
			           <Image source={require('image!my_rightArrow')} />
			        </TouchableOpacity>
				</View>
				<Text style = {styles.shortInfo}>个人简介</Text>
				<Text style = {styles.longInfo}>
						个人简介个人简介个人简介个人简介个人简介
						个人简介个人简介个人简介个人简介个人简介
						个人简介个人简介个人简介个人简介
				</Text>
				<View style = {styles.line1} />
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "我的回答" 
						cellNum = "10" />
				</TouchableOpacity>
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "我的提问" 
						cellNum = "10" />
				</TouchableOpacity>
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "我关注的话题" 
						cellNum = "10" />
				</TouchableOpacity>
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "我的收藏" 
						cellNum = "10" />
				</TouchableOpacity>
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "我的评论" 
						cellNum = "10"
						hiddenLine = "true"
						 />
				</TouchableOpacity>
				<View style = {[styles.line1,{marginTop: 5}]} />
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "浏览记录" 
						cellNum = "10"
						hiddenLine = "true"
						 />
				</TouchableOpacity>
				<View style = {[styles.line1,{marginTop: 5}]} />
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "意见反馈" 
						cellNum = "" />
				</TouchableOpacity>
				<TouchableOpacity onPress = {this._askCellPress}>
					<MyPageCellComponent 
						cellImg = {require('image!bottom_my')} 
						cellText = "设置" 
						cellNum = ""
						hiddenLine = "true"
						 />
				</TouchableOpacity>

			</ScrollView>
		)
	}
}

var styles = StyleSheet.create({

	container: {
		flex: 1, 
		// justifyContent: 'flex-start',
	},
	containerTop: {
		justifyContent: 'flex-start',
		backgroundColor: 'white',  //white
		flexDirection:'row',
		height: 80,
	},
	numStyle: {
		fontWeight:'bold',
		fontSize:14,
		color: '#999999',
	},
	wenziStyle: {
		fontSize:14,
		color: '#999999',
	},
	line1: {
	    height: 10, 
	    marginTop: 10,
	    marginLeft: 0,
	    width: Util.ScreenWidth,
	    backgroundColor: '#eeeeee',
	},
	line2: {
	    height: 1, 
	    marginTop: 10,
	    marginLeft: 0,
	    width: Util.ScreenWidth,
	    backgroundColor: '#eeeeee',
	},
	shortInfo: {
		fontWeight:'bold',
		color: '#666666',
	    marginTop: 10,
	    marginLeft: 10,
	    fontSize: 14,
	},
	longInfo: {
		color: '#666666',
	    marginTop: 6,
	    marginLeft: 10,
	    fontSize: 14,
	    width : Util.ScreenWidth-20,
	},
	userIcon: {
	    marginTop: 10,
	    marginLeft: 10,
	    borderRadius: 30, 
	    alignItems:'center',
	    justifyContent: 'center', 
	    backgroundColor:'#1FCAD3',
	    height: 60,
	    width: 60,
	},
});

module.exports = MyPage;







