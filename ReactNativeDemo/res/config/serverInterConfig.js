
/*
 * 服务器接口配置文件
 */

import React, { Component } from 'react';
import {
    Platform,
    AsyncStorage
} from 'react-native';
 

class ServerInterConfig{ 
    //服务器地址
    static serverDomain = "http://localhost:8000/";
    //注册接口
    static userRegister = ServerInterConfig.serverDomain+"blog/userRegister";
    //登录接口
    static userLogin = ServerInterConfig.serverDomain+"blog/userLogin";

    //首页问题、文章列表
    static topicList = ServerInterConfig.serverDomain+"topic/getTopicList";
}

module.exports = ServerInterConfig;