

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class TabComponent extends Component {
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
            <Text style={styles.headRightText}> {this.props.rightBtnTitle} </Text>
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
	headRightText: {
		color: '#1FCAD3',
		fontSize: 16,
		// marginLeft: 60,
		marginRight: 10,
		textAlign:'right',
		fontWeight:'bold',
	},
});

module.exports = TabComponent



