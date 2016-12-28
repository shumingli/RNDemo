
/*
 *  问题列表model
 */

function TopicModel (serverDic){
	this.topicId = serverDic.topicId;
	this.userId = serverDic.user_id;
	this.topicTypeName = serverDic.topicTypeName;
	this.topicTypeImg = serverDic.topicTypeImg;
	// this.topicTypeImg = 'http://7xj11m.com1.z0.glb.clouddn.com/FuyyEJZN4nyyS7-GpGFMtDq3-Tld';
	this.userIconUrl = serverDic.img;
	this.topicDes = serverDic.topicDes;
	this.quesImg = serverDic.img;
	this.attentionNum = serverDic.attentionNum;
	this.answerNum = serverDic.answerNum;
	this.topicType_id = serverDic.topicType_id;  //所属分类
}
/*
"topicType": 1, 
"topicId": 2, 
"user_id": 1, 
"img": "http://7xj11m.com1.z0.glb.clouddn.com/FuyyEJZN4nyyS7-GpGFMtDq3-Tld",
 "attentionNum": 20, 
 "topicType_id": 1, 
 "topicDes": "\u58eb\u5927\u592b\u7684\u6c34\u7535\u8d39\u6c34\u7535\u8d39\u6c34\u7535\u8d39\u6c34\u7535\u8d39\u6c34\u7535\u8d39\u662f\uff1f", 
 "answerNum": 10
*/



module.exports = TopicModel;











