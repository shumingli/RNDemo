/*
* tabItem 
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

class TabTextItem extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }
	}

	render(){
		return(
			<View style = {this.props.containerStyle}>
				<TouchableOpacity
				    style = {{ alignItems: 'center'}}
				    onPress = {this.props.onPress}
				    disabled = {this.props.disabled}
				    activeOpacity = {1.0} >
				    <Text style = { this.props.select ? this.props.selectTextStyle : this.props.unSelectTextStyle}>
				        {this.props.text}
				    </Text>
				</TouchableOpacity>
				
				<Text 
					style = {{
							marginTop:10,  
							height:2,
							backgroundColor: ColorsConfig.mainColor,
							color: ColorsConfig.mainColor,
							fontSize: 18}} >
					{this.props.select? this.props.text +this.props.text : ""}
				</Text>
			</View>
		);
	}
}

var tiViewStyles = StyleSheet.create({
	containView: {
	    flexDirection:'row',
	    height:54,
	},

	
});

module.exports = TabTextItem;
