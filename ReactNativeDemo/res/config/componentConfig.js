
/*
 * 常用控件配置文件
 */

import React, { Component } from 'react';
import {
    Text,
    Image,
} from 'react-native';



var ComponentConfig = function() {}; 

ComponentConfig.backImage = (<Image style={CommonStylesConfig.styles.backImg} source={require('image!back')} />);
ComponentConfig.backText = function(text){ 
     return <Text style={CommonStylesConfig.styles.backText}> {text} </Text>; 
}  

// class ComponentConfig{ 

// }

module.exports = ComponentConfig;