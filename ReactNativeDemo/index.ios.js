/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Navigator,
} from 'react-native';

// var LoginPage = require('./LoginPage.js');
// var HomePage = require('./homePage.js');
var MainPage = require('./mainPage.js');

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
