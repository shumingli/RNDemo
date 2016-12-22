
/*
 * 首页
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ListView,
  Alert,
  TouchableOpacity,
  InteractionManager,
} from 'react-native';

CommonStylesConfig = require('../config/commonStylesConfig.js');
var QuestionCellComponent = require('../components/questionCellComponent.js');
var QuestionModel = require('../models/questionModel.js');

export default class HomePage extends Component {
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged:(r1,r2)=>r1 !== r2
		});
		this._data = [
				new QuestionModel('张三1'),
				new QuestionModel('李四2'),
				new QuestionModel('小果果3'),
				new QuestionModel('李四4'),
				new QuestionModel('张三5'),
		]; 
		this.state = {
			dataSource: ds.cloneWithRows(this._data),
			isLoadingMore : false,
		};
		
	}
// onEndReachedThreshold，在滚动即将到达底部时触发； 
// 2）onEndReached，在已经到达底部时触发；
	_renderRow(rowData){

	}

	_toEnd() {
          // const { reducer } = this.props;
          // //ListView滚动到底部，根据是否正在加载更多 是否正在刷新 是否已加载全部来判断是否执行加载更多
          // if (reducer.isLoadingMore 
          // 	|| reducer.products.length >= reducer.totalProductCount 
          // 	|| reducer.isRefreshing) {
          //     return;
          // };
          // InteractionManager.runAfterInteractions(() => {
          //     console.log("触发加载更多 toEnd() --> ");
          //     this._loadMoreData();
          // });
		if (this.state.isLoadingMore) {
			return;
		} 
		InteractionManager.runAfterInteractions(() => {
            console.log("触发加载更多 toEnd() --> ");
            var newData = [
            	new QuestionModel('李四6'),
				new QuestionModel('小果果7'),
				new QuestionModel('李四8'),
				new QuestionModel('张三9'),
				new QuestionModel('李四10'),
				// new QuestionModel('小果果11'),
				// new QuestionModel('李四12'),
				// new QuestionModel('小果果13'),
				// new QuestionModel('李四  14'),
				// new QuestionModel('小果果 15'),
				// new QuestionModel('李四  16'),
			];

			this._data = this._data.concat(newData);
			console.log(this._data);
			this.setState({
			    dataSource: this.state.dataSource.cloneWithRows(this._data),
				isLoadingMore: true,
			});
        });
		
		
     }

	// _onDataArrived = (newData) => {
	//   this._data = this._data.concat(newData);
	//   this.setState({
	//     dataSource: this.state.dataSource.cloneWithRows(this._data)
	//   });
	// };
	// http://www.jianshu.com/p/dff750d8c425
	
	render(){
		return(
			<View style={styles.container}>
				<ListView 
					dataSource={this.state.dataSource}
					renderRow={(rowData) => 
						<QuestionCellComponent 
							userName={rowData.userName}
							questionTxt={rowData.questionDes}  />}
					onEndReached={ this._toEnd.bind(this) }
						
					
				 />
			</View>
		)
	}
}

var styles = StyleSheet.create({
	
	container: {
		flex: 1, 
		justifyContent: 'flex-start',
	},
	
});

module.exports = HomePage;







