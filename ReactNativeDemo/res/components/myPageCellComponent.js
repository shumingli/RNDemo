/*
* 个人主页cell
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
} from 'react-native';

class MyPageCellComponent extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }
	    this._getLine = this._getLine.bind(this);
	}

	_getLine(){
		if (!this.props.hiddenLine) {
			return <View style = {CommonStylesConfig.styles.line1sp} />;
		} 
		return null;
	}

	render(){
		return(
			<View style={styles.containView}>
				<View style = {styles.cellView}>
					<View style = {styles.cellImg}>
						<Image source={this.props.cellImg} />
					</View>
					<View style = {[styles.cellChildView,{flex: 150}]}>
						<Text style = {styles.cellText}>{this.props.cellText}</Text>  
					</View>
					<View style = {[styles.cellChildView,{flex: 100}]}>
						<Text style = {styles.cellNum}>{this.props.cellNum}</Text>
					</View>
					<View style = {[styles.cellChildView,{flex: 10}]}>
						<Image style = {styles.cellArrow} source={require('image!my_rightArrow')} />
					</View>
					<View style = {[styles.cellChildView,{flex: 10}]} />
				</View>
				<View>
					{this._getLine()} 
				</View>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	containView: {
	    height:54,
	},
	cellView: {
		flexDirection:'row',
		marginLeft: 20,
		marginTop: 10,
		height: 44,
	},
	cellChildView: {
		justifyContent: 'center', 
	},
	cellImg: {
		justifyContent: 'center',
		flex: 30,
	},
	cellText: {
		fontWeight:'bold',
		fontSize:14,
		color: '#999999',

	},
	cellNum: {
		fontWeight:'bold',
		fontSize:14,
		color: '#999999',
		textAlign: 'right',
		marginRight: 10,
	},
	cellArrow: {

		
	},
	cellLine: {
		height: 1, 
	    marginLeft: 20,
	    width: Util.ScreenWidth,
	    backgroundColor: '#eeeeee',
	},
});

module.exports = MyPageCellComponent;




