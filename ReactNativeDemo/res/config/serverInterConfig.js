
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
    static serverDomain = "http://192.168.1.144:8000/";
    // static serverDomain = "http://localhost:8000/";
    //注册接口
    static userRegister = ServerInterConfig.serverDomain+"blog/userRegister";
    //登录接口
    static userLogin = ServerInterConfig.serverDomain+"blog/userLogin";

    /***
     * @des: 获取用户关注列表 
     * @par1: index 分页索引
     * 
     */
    static attentionUserList = ServerInterConfig.serverDomain+"blog/getUserList";

    //首页问题、文章列表
    static topicList = ServerInterConfig.serverDomain+"topic/getChosenTopicList";

    //http://192.168.1.133:8000/topic/getTopicTypeList?userId=1&index=0
    //获取话题分类列表
    static topicTypeList = ServerInterConfig.serverDomain+"topic/getTopicTypeList";
}

module.exports = ServerInterConfig;































