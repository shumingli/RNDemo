/*
* 测试界面
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  WebView,
  ListView,
  Alert,
  TouchableOpacity
} from 'react-native';

var WEBVIEW_REF = 'webview';

class TestPage extends Component {
	constructor(props){
		super(props);
		this.state = {
			url: 'http://www.haibaotime.com/',
			scalesPageToFit: true,
		}


		
		
	}

	_onBack = ()=>{
		this.props.navigator.pop();
	}
	_onNavigationStateChange = (navState) => {
	    this.setState({
	      backButtonEnabled: navState.canGoBack,
	      forwardButtonEnabled: navState.canGoForward,
	      url: navState.url,
	      status: navState.title,
	      loading: navState.loading,
	      scalesPageToFit: true
	    });
	};
	_onShouldStartLoadWithRequest = (event) => {
	    // Implement any custom loading logic here, don't forget to return!
	    return true;
	};
	render(){
		return(
			<View style={styles.container}>
				 <WebView
			          ref = {WEBVIEW_REF}
			          automaticallyAdjustContentInsets = {false}
			          style = {styles.webView}
			          source = {{uri: 'https://www.baidu.com/'}}
			          javaScriptEnabled = {true}
			          domStorageEnabled = {true}
			          decelerationRate = "normal"
			          onNavigationStateChange = {this._onNavigationStateChange.bind(this)}
			          onShouldStartLoadWithRequest = {this._onShouldStartLoadWithRequest.bind(this)}
			          startInLoadingState = {true}
			          scalesPageToFit = {this.state.scalesPageToFit}
			        />
				
			</View>
		);
	}
}

export default class TestListViewPage extends Component {
	constructor(props){
		super(props);

		var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[rowID];
        };

		const ds = new ListView.DataSource({
			getRowData: getRowData,
            getSectionHeaderData: getSectionData,
			sectionHeaderHasChanged:(s1, s2) => s1 !== s2,
			rowHasChanged:(r1,r2)=>r1 !== r2,
		});
		sIds = ["sid1","sid2"];
		rIds = [["S1R1"],["S2R1"]];
		this._data = {sid1: "s1Data",sid2: "s2Data",S1R1: "S1R1Data",S2R1: "s2_r1_Data"}; 
		this.state = {
			dataSource: ds.cloneWithRowsAndSections(this._data,sIds,rIds),
			isLoadingMore: false,
			curIndex: 0,
		};
	}

	_onBack = ()=>{
		this.props.navigator.pop();
	}
	_testFun(){
		Alert.alert("test","sss");
	}

	_renderRow(rowData,sid,rid){
		// this._testFun();
    	return <Text>{rowData}</Text>;
    }
    
    _renderSectionHeader(sectionData, sectionId){
    	return <Text>{sectionData+"_"+sectionId}</Text>;
    }
	
	render(){
		return(
			<View style = {styles.container}>
				 <ListView 
					dataSource = {this.state.dataSource}
					renderSectionHeader = {this._renderSectionHeader.bind(this)}
					renderRow = {this._renderRow.bind(this)}
					onEndReachedThreshold = {50}
					enableEmptySections = {true}  />
				
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
	webView: {
	    backgroundColor: 'white',
	    height: 350,
	},
});

module.exports = TestListViewPage;





