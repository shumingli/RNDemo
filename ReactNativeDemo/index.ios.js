/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * http://www.kancloud.cn/digest/rnative/121790
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

var LoginPage = require('./res/pages/loginPage.js');
// var HomePage = require('./homePage.js');
var MainPage = require('./res/pages/mainPage.js');
var TestPage = require('./res/pages/testPage.js');

export default class ReactNativeDemo extends Component {
  renderScene(route,navigator){
    return <route.component navigator={navigator} {...route.passProps} />;
  }

  configureScene(route,routeStack){
    if (route.type == 'Bottom') {
      return Navigator.SceneConfigs.FloatFromBottom; //从底部进入
    };
    return Navigator.SceneConfigs.PushFromRight;  //从右侧进入
  }

  render(){
    return(<Navigator 
      style={{flex:1}} 
      initialRoute={{component:MainPage}}
      configureScene={this.configureScene}
      renderScene={this.renderScene}/>);
  }
}

AppRegistry.registerComponent('ReactNativeDemo', () => ReactNativeDemo);



























