
/*
 * 配置文件
 */

import React, { Component } from 'react';
import {
    Platform,
    AsyncStorage
} from 'react-native';
 

class PublicConfig extends Component{ 
    //服务器地址
    static serverDomain = "http://localhost:8000/";
    //注册接口
    static userRegister = PublicConfig.serverDomain+"blog/userRegister";
    //登录接口
    static userLogin = PublicConfig.serverDomain+"blog/userLogin";
}

module.exports = PublicConfig;