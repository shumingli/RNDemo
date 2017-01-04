
/*
 *  话题分类列表model
 */

function TopicTypeModel (serverDic){
	this.topicTypeId = serverDic.topicTypeId;
	this.topicTypeName = serverDic.topicTypeName;
	this.topicTypeImg = serverDic.topicTypeImg;
	this.topicTypeDes = serverDic.topicTypeDes;
	this.attentionUsers = serverDic.attentionUsers;
}

module.exports = TopicTypeModel;











