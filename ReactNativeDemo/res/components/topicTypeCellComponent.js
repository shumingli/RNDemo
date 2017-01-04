/*
* 话题分类cell
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

class TopicTypeCellComponent extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }

	    console.log("ttttttttt");
	    console.log(this.props.topicTypeModel);
	}
	
	render(){
		var icon = {uri:this.props.topicTypeModel.topicTypeImg};
		return(
			<View style = {styles.cellParView}>
				<View style={styles.containerTop}>
	      			<View style={{width:80, alignItems:'center',justifyContent:'center'}}>
						<Image style = {styles.userIcon} source={icon} />
					</View>
					<View style={{marginTop:10,marginRight:10,width:Util.ScreenWidth-90}}>
						<Text style = {styles.typeNameStyle}>{this.props.topicTypeModel.topicTypeName}</Text>
						<Text numberOfLines = {2} style = {styles.typeDesStyle}>
							{this.props.topicTypeModel.topicTypeDes}
						</Text>
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
	    fontSize: 14,
	    marginTop: 5,
	    marginRight: 10,
	    width: Util.ScreenWidth-90
	},
	userIcon: {
	    // marginTop: 10,
	    marginLeft: 10,
	    marginRight: 10,
	    borderRadius: 30, 
	    height: 60,
	    width: 60,
	},

});

module.exports = TopicTypeCellComponent;




