/***
 * 用户列表cell
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

var Button = require('../controls/Button.js');

class UserCellComponent extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }
	}

	_attentionOnPress(){

	}
	
	render(){
		var icon = {uri:this.props.userModel.userIconUrl};
		return(
			<View style = {styles.cellParView}>
				<View style={styles.containerTop}>
	      			<View style={{width:80, alignItems:'center',justifyContent:'center'}}>
						<Image style = {styles.userIcon} source={icon} />
					</View>
					<View style={{marginTop:18,marginRight:10,width:Util.ScreenWidth-180}}>
						<Text style = {styles.typeNameStyle}>{this.props.userModel.userName}</Text>
						<Text numberOfLines = {1} style = {styles.typeDesStyle}>
							{this.props.userModel.userShortIntro}
						</Text>
					</View>
					<View style={{justifyContent: 'center',width: 90,marginRight: 10,}}>
						<Button 
							text='关注' 
							style = {styles.buttonTextStyle} 
							containerStyle = {styles.buttonBgStyle} 
							onPress = {this._attentionOnPress.bind(this)} />
					</View>
	      		</View>
	      		<View style = {[CommonStylesConfig.styles.line1sp,{marginTop: 0,marginLeft: 10,width: Util.ScreenWidth-10}]} />
      		</View>
		);
	}
}

var styles = StyleSheet.create({
	cellParView: {
		flex: 1,
	    backgroundColor:'white',
	},
	containerTop: {
		justifyContent: 'flex-start',
		backgroundColor: 'white',  //white
		flexDirection:'row',
		height: 80,
	},
	typeNameStyle: {
		fontWeight:'bold',
		color: '#666666',
	    fontSize: 18,
	},
	typeDesStyle: {
		fontWeight:'bold',
		color: '#999999',
	    fontSize: 16,
	    marginTop: 5,
	    marginRight: 10,
	    width: Util.ScreenWidth-170
	},
	userIcon: {
	    // marginTop: 10,
	    marginLeft: 10,
	    marginRight: 10,
	    borderRadius: 30, 
	    height: 60,
	    width: 60,
	},
	buttonBgStyle: {
		borderRadius: 15, 
	    alignItems:'center',
	    justifyContent: 'center', 
	    backgroundColor:'#1FCAD3',
	    width: 80,
	    height: 30,

	},
	buttonTextStyle: {
		fontWeight:'bold',
		color: 'white',
	    fontSize: 14,
	},
});

module.exports = UserCellComponent;




