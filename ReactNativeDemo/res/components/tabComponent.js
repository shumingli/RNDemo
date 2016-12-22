

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class TabComponent extends Component {
	constructor(props){
	    super(props);
	    this.state = {
	       
	    }
	}
	
    render() {
	    return (
	      <View style={{backgroundColor:'blue'}}>
	        <View style={styles.heading}> 
	          <TouchableOpacity 
	            style={styles.navigatorLeftItem}
	            onPress={this.props.onLeftBtnPress} >
	            <Text style={styles.headLeftText}> {this.props.leftBtnTitle} </Text>
	          </TouchableOpacity>
	          <View style={styles.navigatorTitleItem}>
	    		 <Text style={styles.headText}>{this.props.title}</Text>
	          </View>
	          <TouchableOpacity 
	            style={styles.navigatorRightItem}
	            onPress={this.props.onRightBtnPress} >
	            	{this.props.rightItem}
	          </TouchableOpacity>
	    	</View>
	        <View style={styles.barLine} />
	      </View>
	    );
  }
}

const styles = StyleSheet.create({
	navigatorRightItem: {
		flex:1,
		justifyContent: 'center',
		
		alignSelf : 'stretch',
		alignItems: 'flex-end',
	},
	navigatorLeftItem: {
		flex:1, 
	},
	navigatorTitleItem: {
		flex:1,
		alignItems:'center'
	},
	barLine: {
		height:1, 
		backgroundColor:'#CCCCCC'
	},
	
	heading:{
		height: 44,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#ffffff',
	},
	headText: {
		color: '#000000',
		fontSize: 22,
		fontWeight:'bold',
	},
	headLeftText: {
		color: '#000000',
		fontSize: 22,
		fontWeight:'bold',
		marginLeft: 10,
	},
	
});

module.exports = TabComponent



