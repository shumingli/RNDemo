
/*
 * 底部状态栏
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';

export default class BottomBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      index : 1,
      homeStyle : styles.itemText2,
      homeIcon : require('image!bottom_home_sel'),
      findStyle : styles.itemText1,
      findIcon : require('image!bottom_show'),
      attentionStyle : styles.itemText1,
      attentionIcon : require('image!bottom_attention'),
      myStyle : styles.itemText1,
      myIcon : require('image!bottom_my'),
    }

    this._selectBar = this._selectBar.bind(this);
    // this.onTabPress = this.props.onTabPress.bind(this);
  }
  _selectBar(index){
    console.log(index);
    let states = {
      index : index,
      homeStyle : styles.itemText1,
      homeIcon : require('image!bottom_home'),
      findStyle : styles.itemText1,
      findIcon : require('image!bottom_show'),
      attentionStyle : styles.itemText1,
      attentionIcon : require('image!bottom_attention'),
      myStyle : styles.itemText1,
      myIcon : require('image!bottom_my'),
    };

    if (index == 1) {
      states.homeStyle = styles.itemText2;
      states.homeIcon = require('image!bottom_home_sel');
    }else if(index == 2){
      states.findStyle = styles.itemText2;
      states.findIcon = require('image!bottom_show_sel');
    }else if(index == 3){
      states.attentionStyle = styles.itemText2;
      states.attentionIcon = require('image!bottom_attention_sel');
    }else if(index == 4){
      states.myStyle = styles.itemText2;
      states.myIcon = require('image!bottom_my_sel');
    };
    this.setState(states);
  };
  _selectHome = ()=>{
       this._selectBar(1);   
       this.props.onTabPress(1);    
    };
    _selectFind = ()=>{
       this._selectBar(2); 
       this.props.onTabPress(2);      
    };
    _selectAttention = ()=>{
       this._selectBar(3);   
       this.props.onTabPress(3);    
    };
    _selectMy = ()=>{
       this._selectBar(4);  
       this.props.onTabPress(4);      
    };

  render() {
    return (
      <View style={{height:54}}>
        <View style={styles.barLine} />
        <View style={styles.heading}> 
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this._selectHome} >
            <Image source={this.state.homeIcon}></Image>
            <Text style={this.state.homeStyle}> 首页 </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this._selectFind} >
            <Image source={this.state.findIcon}></Image>
            <Text style={this.state.findStyle}> 发现 </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this._selectAttention} >
            <Image source={this.state.attentionIcon}></Image>
            <Text style={this.state.attentionStyle}> 关注 </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.bottomItem}
            onPress={this._selectMy} >
            <Image source={this.state.myIcon}></Image>
            <Text style={this.state.myStyle}> 我的 </Text>
          </TouchableOpacity>
      </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bottomItem: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  barLine: {
    height:1, 
    backgroundColor:'#CCCCCC'
  },
  heading:{
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  itemText1: {
    color: '#999999',
    fontSize: 14,
    fontWeight:'bold',
    textAlign: 'center',
  },
  itemText2: {
    color: '#1FCAD3',
    fontSize: 14,
    fontWeight:'bold',
    textAlign: 'center',
  },
});

module.exports = BottomBar;



