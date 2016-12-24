/*
* 注册页面
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native';

var MainPage = require('../pages/mainPage.js');
var RegisterTIView = require('../components/registerTIView.js');

export default class RegisterPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			phoneNumber: '0',
			password1: '0',
			password2: '0',
			userName: '0',
		}
	}
	_navigate(page,p={},type='Normal'){
	    this.props.navigator.push({
	      component: page,
	      passProps: (p),
	      type: type
	    })
	}

	_onBack = ()=>{
		this.props.navigator.pop();
	}
	_onChangePhoneText = (text)=>{
		this.state.phoneNumber = text;
		console.log(text);
	}
	_onChangePaswword1Text = (text)=>{
		this.state.password1 = text;
		console.log(text);
	}
	_onChangePaswword2Text = (text)=>{
		this.state.password2 = text;
		console.log(text);
	}
	_onChangeUserNameText = (text)=>{
		this.state.userName = text;
		console.log(text);
	}
	//触发注册事件
	_onRegisterPress = ()=>{
		// this.props.navigator.pop();
		var self = this;
	    let params = {
	        phoneNumber : this.state.phoneNumber,
	        password : this.state.password1,
	        userName : this.state.userName,
	    };
	    HttpUtil.request(HttpUtil.requestTypeGet, ServerInterConfig.userRegister,params,function (resObj) {
	        //下面的就是请求来的数据
	        var code = resObj['code'];
            //做全局处理
            if (code == 1) {
            	Alert.alert(
		            '提示',
		            '注册成功',
		            [{text:'OK',onPress:()=>self._navigate(MainPage)},]
		        )
            }else if(code == 1001){
            	Alert.alert(
		            '提示',
		            '账号已经存在',
		        )
            }else{
            	Alert.alert(
		            '提示',
		            '注册失败',
		        )
            }
	    });
	}

	render(){
		return(
			<View style={styles.container}>
				<TabComponent 
					title='注册' 
					leftBtnTitle='<返回' 
					onLeftBtnPress={this._onBack} />
				<RegisterTIView 
					placeholder="请输入手机号" 
					source={require('image!login_contact_icon')}
					onChangeText={this._onChangePhoneText} />
				<RegisterTIView 
					placeholder="请输入密码" 
					source={require('image!login_contact_icon')}
					onChangeText={this._onChangePaswword1Text} />
				<RegisterTIView 
					placeholder="请再次输入密码" 
					source={require('image!login_contact_icon')}
					onChangeText={this._onChangePaswword2Text} />
				<RegisterTIView 
					placeholder="请输入用户名" 
					source={require('image!login_contact_icon')}
					onChangeText={this._onChangeUserNameText} />
		        
				<TouchableOpacity onPress={this._onRegisterPress}>
		          <View style={styles.loginBtn}>
		            <Text style={styles.loginText}>注册</Text>
		          </View>
		        </TouchableOpacity>
			</View>
		);
	}
}

var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		marginTop: 20,
	},
	phonePreText: {
	    color:'#444444', 
	    marginLeft:20,
	    marginRight:20,
	    marginTop:25, 
	    textAlign:'center',
	    alignItems:'center',
	    fontSize:18,
  	},
  	loginText: {
	     color:'white',
	     fontSize:18,
	},
	loginBtn: {
	    marginTop:50,
	    marginLeft:60,
	    marginRight:60,
	    borderColor: '#ff8447',
	    borderRadius: 22, 
	    alignItems:'center',
	    justifyContent: 'center', 
	    backgroundColor:'#1FCAD3',
	    height:44,
	},
});

module.exports = RegisterPage;





