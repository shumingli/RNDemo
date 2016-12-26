/*
* 搜索界面
*/

import React, { Component } from 'react';
import {
 	Navigate,
} from 'react-native';

export default class BaseNavigatePage extends Component {
	constructor(props){
		super(props);
		this.state = {
			
		}
		this._navigate = this._navigate.bind(this);
	};

	_navigate(page,p={},type='Normal'){
	    this.props.navigator.push({
	      component: page,
	      passProps: (p),
	      type: type
	    })
	};
}

module.exports = BaseNavigatePage;





