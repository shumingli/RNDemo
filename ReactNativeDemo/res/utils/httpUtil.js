/**
 * NetUitl 网络请求的实现
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    Platform,
    AsyncStorage,
    NetInfo,
    Alert,
} from 'react-native';

const NOT_NETWORK = "网络不可用，请稍后再试";
 
class HttpUtil extends React.Component{

    /***
     * 检查网络链接状态
     * @param callback
     */
    static checkNetworkState(callback){
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                callback(isConnected);
            }
        );
    }
    /***
     * 网络请求
     * @param  type
     * @param  url:请求地址
     * @param  data:参数
     * @param  callback:回调函数
     */
    static request(type,url,params,callback){
        NetInfo.fetch().done((status)=> {
            console.log('StatusStatus:'+type);
        });
        if (type == 'get') {
            HttpUtil.get(url,params,callback);
        } else{
            HttpUtil.post(url,params,callback);
        };

        // HttpUtil.checkNetworkState((isConnected)=>{
        //     if (isConnected) {
        //         if (type == 'get') {
        //             HttpUtil.get(url,params,callback);
        //         } else{
        //             HttpUtil.post(url,params,callback);
        //         };
        //     }else{
        //         console.log('网络连接状态：');
        //         console.log(isConnected);
        //         Alert.alert('提示','网络连接失败，请稍后重试');
        //     }
        // });
    }

    /***
     * get请求
     * @param  url:请求地址
     * @param  data:参数
     * @param  callback:回调函数
     */
    static get(url,params,callback){
        if (params) {
            let paramsArray = [];
            //拼接参数
            Object.keys(params).forEach(key => paramsArray.push(key + '=' + params[key]))
            if (url.search(/\?/) === -1) {
                url += '?' + paramsArray.join('&')
            } else {
                url += '&' + paramsArray.join('&')
            }
              //fetch请求
            fetch(url,{
                method: 'GET',
            })
            .then((response) => response.json())
            .then((responseJSON) => {
                console.log('返回数据');
                let resObj = JSON.parse(responseJSON);
                console.log(responseJSON);
                var code = resObj['code'];
                //做全局处理
                if (code == 1) {
                    var data = resObj['data'];
                } else{ //进行错误处理

                };
                callback(resObj);
            }).catch((error) => {
                console.error(error);
            });
        }
    }
    /***
     * post请求
     * @param  url:请求地址
     * @param  data:参数
     * @param  callback:回调函数
     */
    static post(url,params,callback){
        //fetch请求
        fetch(url,{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(params),
        })
        .then((response) => response.json())
        .then((responseJSON) => {
            console.log('返回数据');
            console.log(responseJSON);
            let res = {
                code:"1"
            };
            console.log(res);
            callback(responseJSON);
        }).catch((error) => {
            console.error(error);
        });
    }
}
 
module.exports = HttpUtil;

