
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

var TabComponent = require('./tabComponent.js');

var HttpUtil = require('./httpUtil.js');
var RegisterPage = require('./registerPage.js');
var RememberPage = require('./rememberPage.js');
var RegisterTIView = require('./registerTIView.js');
var PublicConfig = require('./publicConfig.js');
var MainPage = require('./mainPage.js');

class ShareBtnComponent extends Component{
  render(){
    return(
        <TouchableOpacity onPress={this.props.onLoginPress} style={styles.threeLoginBtn}>
            <Image source={this.props.imageName} />
            <Text style={styles.threeLoginFont}>{this.props.title}</Text>
        </TouchableOpacity>
      );
  }
}

export default class LoginPage extends Component {
  constructor(props){
    super(props);
    this.state = {
       phoneNumber : '0',
       password: '0'
    }
    // this.onLoginPress = this.onLoginPress.bind(this); //函数绑定
  }

  _navigate(page,p={},type='Normal'){
    this.props.navigator.push({
      component: page,
      passProps: (p),
      type: type
    })
  }
  //登录
  _onLoginPress = () => {
    var self = this;
    let params = {
        phoneNumber : this.state.phoneNumber,
        password : this.state.password,
    };
    HttpUtil.get(PublicConfig.userLogin,params,function (set) {
        //下面的就是请求来的数据
        Alert.alert(
            '提示',
            '登录成功',
            [{text:'OK',onPress:()=>self._navigate(MainPage)},]
        )
    })
  };
  //注册
  _onRegisterPress = ()=>{
     console.log('测试注册点击');
     this._navigate(RegisterPage);
  };
  //忘记密码
  _onRemberPress = ()=>{
     this._navigate(RememberPage);
  };
  //微信登录
  _onWeiXinLoginPress = ()=>{
    console.log('测试点击微信登录');
  };
  //微博登录
  _onWeiBoLoginPress = ()=>{

  };
  _onChangePwdText = (text) =>{
      this.state.password = text;
  }

  render() {
    return (
      <View style={styles.container}>
        <TabComponent 
            title='登录' 
            rightBtnTitle='注册' 
            onRightBtnPress={this._onRegisterPress} />
        <View style={styles.phonePreView}>
          <Image style={styles.contactIcon} source={require('image!login_contact_icon')} />
          <Text style={styles.phonePreText}>+86</Text>
          <View style={{width:1,height:30,backgroundColor:'#eeeeee',marginTop:20,marginLeft:10}}></View>
          <TextInput onChangeText={
            (text) => {
              this.state.phoneNumber = text;
            }} 
          style={styles.tiPhone} 
          placeholder="请输入手机号" />
        </View>
        <View style={styles.line} />
      
        <RegisterTIView 
          placeholder="请输入6-16位密码" 
          source={require('image!login_contact_icon')}
          onChangeText={this._onChangePwdText} />


        <TouchableOpacity onPress={this._onRemberPress}>
          <Text style={styles.remberPwd}>忘记密码？</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onLoginPress}>
          <View style={styles.loginBtn}>
            <Text style={styles.loginText}>登录</Text>
          </View>
        </TouchableOpacity>

         <View style={{flex:1,flexDirection:'row',marginTop:100,marginLeft:20,marginRight:20}}>
           <ShareBtnComponent  title='微信登录' imageName={require('image!share_wechat')} onLoginPress={this._onWeiXinLoginPress} />
           <ShareBtnComponent  title='微博登录' imageName={require('image!share_weibo')} onLoginPress={this._onWeiBoLoginPress} />
           <ShareBtnComponent  title='QQ登录' imageName={require('image!share_wechat')} onLoginPress={this._onWeiXinLoginPress} />
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contactIcon: {
    marginTop:29, 
    marginLeft:25,
  },
  threeLoginBtn: {
     flex:1,
     alignItems:'center',
  },
  threeLoginFont: {
    marginTop:6,
    fontSize:16,
  },
  navigatorRightItem: {
    flex:1,
    alignItems:'center',
  },
  navigatorLeftItem: {
    flex:1, 
  },
  navigatorTitleItem: {
    flex:1,
    alignItems:'center'
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
  tiPwd: {
    marginLeft:20, 
    width:200,
    height:34,
    fontSize:18,
    color:'#444444',
    marginTop:20,
  },
  barLine: {
    height:1, 
    backgroundColor:'#CCCCCC'
  },
  line: {
    height:1, 
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#eeeeee'
  },
  tiPhone: {
      width:200,
      height:54,
      fontSize:18,
      color:'#444444',
      marginTop:10, 
      marginLeft:10,
  },
  phonePreView: {
    flexDirection:'row',
    height:54,
    marginTop: 30,
  },
  phonePreText: {
    color:'#444444', 
    marginLeft:10,
    marginTop:25, 
    textAlign:'center',
    alignItems:'center',
    fontSize:18,
  },
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		marginTop: 20,
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
  headText2: {
    color: '#1FCAD3',
    fontSize: 16,
    marginLeft: 60,
    fontWeight:'bold',
  },
  remberPwd: {
    color: '#000000',
    fontSize: 16,
    fontWeight:'bold',
    textAlign: 'right',
    marginTop: 20,
    marginRight: 10,
  }
});

module.exports = LoginPage



