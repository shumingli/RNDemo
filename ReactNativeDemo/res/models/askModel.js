
/*
 *  回答列表model
 */

function AskModel (serverDic){
	this.topicId = serverDic.topicId;
	this.topicDes = serverDic.topicDes;  //问题描述
	this.userId = serverDic.user_id;
	this.userIconUrl = serverDic.img;
	this.quesImg = serverDic.img;
	this.content = serverDic.content;

	this.assentNum = serverDic.attentionNum;
	this.commentNum = serverDic.answerNum;

}

module.exports = AskModel;











