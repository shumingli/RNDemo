
/*
 * 样式配置文件
 */

// import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
} from 'react-native';
 
class CommonStylesConfig { 
    static styles = StyleSheet.create({
		line10sp: {
		    height: 10, 
		    marginTop: 10,
		    marginLeft: 0,
		    width: Util.ScreenWidth,
		    backgroundColor: '#eeeeee',
		},
		line1sp: {
		    height: 1, 
		    marginTop: 10,
		    marginLeft: 0,
		    width: Util.ScreenWidth,
		    backgroundColor: '#eeeeee',
		},
	});
}

module.exports = CommonStylesConfig;










