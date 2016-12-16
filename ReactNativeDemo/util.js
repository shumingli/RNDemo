
/*
 * 工具类
 */

import React, { Component } from 'react';
import {
    Platform,
    AsyncStorage
} from 'react-native';
 

var Dimensions = require('Dimensions');
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;
var ScreenScale = Dimensions.get('window').scale;

class Util extends Component{ 
    static ScreenWidth = ScreenWidth;
    static ScreenHeight = ScreenHeight;
    static ScreenScale = ScreenScale;
}

module.exports = Util;





