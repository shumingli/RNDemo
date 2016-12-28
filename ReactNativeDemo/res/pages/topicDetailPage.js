/*
* 搜索界面
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  TabBarIOS,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

var Button = require('../controls/Button.js');

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

export default class TopicDetailPage extends BaseNavigatePage {
	constructor(props){
		super(props);
		this.state = {
			selectedTab : 'assent', 
			assentText: '100赞同',
			collectText: '收藏',
			commentText: '100评论',
		}
		this._renderContent = this._renderContent.bind(this);
	}
 
	onBack = ()=>{
		this.props.navigator.pop();
	}
	//关注
	_attentionOnPress = ()=>{
		Alert.alert(
            '提示',
            '登录成功',
            
        );
	}
	//赞同
	_assentOnPress = ()=>{
		this.setState ({
			selectedTab : 'assent',


		});


	}
	//收集
	_collectOnPress = ()=>{
		this.setState ({
			selectedTab : 'collect',

		});
		
		
	}
	//评论
	_commentOnPress = ()=>{
		this.setState ({
			selectedTab : 'comment',

		});
	}
	
	_renderContent(pageText) {
	    return (
	      	<ScrollView style={styles.contentStyle}>
	   			<Text style={styles.qusText}>为什么雾霾天气为什么雾霾天气为什么雾霾天气为什么雾气？</Text>
	   			<View style = {CommonStylesConfig.styles.line10sp} />
	      		<View style={styles.containerTop}>
	      			<View style={{flex: 70}}>
						<Image style = {styles.userIcon} source={require('image!my_icon')} />
					</View>
					<View style={{flex: Util.ScreenWidth-70-80,marginTop:10}}>
						<Text style = {styles.shortInfo}>张三老师</Text>
						<Text style = {styles.shortInfo}>育儿园老师/作家</Text>
					</View>
					<View style={{justifyContent: 'center',flex: 80,marginRight: 10,}}>
						<Button 
							text='关注' 
							style = {styles.buttonTextStyle} 
							containerStyle = {styles.buttonBgStyle} 
							onPress = {this._attentionOnPress.bind(this)} />
					</View>
	      		</View>
	      		<View style = {[CommonStylesConfig.styles.line1sp,{marginTop: 0}]} />
	      		<Text style = {{marginTop: 10,marginLeft: 10,fontSize: 16,width: Util.ScreenWidth-20 }}>
	      			教育，教化培育，以现有的经验、学识推敲于人，为其解释各种现象、问题或行为，其根本是以人的一种相对成熟或理性的思维来认知对待，让事物得以接近其最根本的存在，
   			人在其中，慢慢的对一种事物由感官触摸而到以认知理解的状态，并形成一种相对完善或理性的自我意识思维...但同时，人有着自我意识上的思维，又有着其自我的感官维度，所以，任何教育性的意识思维都未必能够绝对正确，而应该感性式的理解其思维的方向，只要他不偏差事物的内在；教育又是一种思维的传授，而人因为其自身的意识形态，又有着另样的思维走势，所以，教育当以最客观、最公正的意识思维教化于人，如此，人的思维才不至于过于偏差，并因思维的丰富而逐渐成熟、理性，并由此，走向最理性的自我和拥有最正确的思维认知，或许，这就是教育的根本所在。教育也是一种教授育人的过程，可将一种最客观的理解教予他人，而后在自己的生活经验中得以自己所认为的价值观。
	      		</Text>
	      	</ScrollView>
	    );
	};
	 // renderAsOriginal = {true}
	render(){
		return(
			<View style={styles.container}>
				<TabComponent 
					title='话题' 
					leftItem={ComponentConfig.backImage}
					onLeftBtnPress={this.onBack} />
				<TabBarIOS
			        unselectedTintColor = {ColorsConfig.taBarTxtColor}
			        tintColor = {ColorsConfig.mainColor}
			        barTintColor = "white">
			        <TabBarIOS.Item
			          	title = {this.state.assentText}
			          	icon = {require('image!topic_assent')}
			          	selectedIcon = {require('image!topic_assent_sel')}
			          	selected = {this.state.selectedTab === 'assent'}
			          	onPress = {this._assentOnPress}>
			          	{this._renderContent('assent')}
			        </TabBarIOS.Item>
			        <TabBarIOS.Item
			          	icon={require('image!topic_collect')}
			          	selectedIcon={require('image!topic_collect_sel')}
			          	title={this.state.collectText}
			          	selected={this.state.selectedTab === 'collect'}
			          	onPress={this._collectOnPress}>
			          	{this._renderContent('assent')}
			        </TabBarIOS.Item>
			        <TabBarIOS.Item
			          	icon = {require('image!topic_comment')}
			          	selectedIcon = {require('image!topic_comment')}
			          	title = {this.state.commentText}
			          	selected = {this.state.selectedTab === 'comment'}
			          	onPress = {this._commentOnPress}>
			          	{this._renderContent('comment')}
			        </TabBarIOS.Item>
			      </TabBarIOS>
			</View>
		);
	}
}
// back
var styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		backgroundColor: 'white',
		marginTop: 20,
	},
	contentStyle: {
	    flex: 1,
	    backgroundColor:'white',
	},
	tabText: {
	    color: 'white',
	    margin: 50,
	},
	qusText: {
		fontWeight:'bold',
		color: '#000000',
	    marginTop: 10,
	    marginLeft: 10,
	    fontSize: 18,
	    width: Util.ScreenWidth-20,
	    textAlign: 'center',
	    // backgroundColor: 'blue',
	},
	containerTop: {
		justifyContent: 'flex-start',
		backgroundColor: 'white',  //white
		flexDirection:'row',
		height: 80,
	},
	shortInfo: {
		fontWeight:'bold',
		color: '#666666',
	    marginTop: 10,
	    marginLeft: 10,
	    fontSize: 14,
	},
	userIcon: {
	    marginTop: 10,
	    marginLeft: 10,
	    borderRadius: 30, 
	    height: 60,
	    width: 60,
	},

	buttonBgStyle: {
		borderRadius: 15, 
	    alignItems:'center',
	    justifyContent: 'center', 
	    backgroundColor:'#1FCAD3',
	    width: 80,
	    height: 30,
	},
	buttonTextStyle: {
		fontWeight:'bold',
		color: 'white',
	    fontSize: 14,
	},


});

module.exports = TopicDetailPage;





