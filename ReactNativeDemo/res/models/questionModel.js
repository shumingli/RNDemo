
/*
 *  问题列表model
 */

function QuestionModel (userName,userIconUrl,questionDes,quesImg,attentionNum,askNum,qtype) {
	this.userName = userName;
	this.userIconUrl = userIconUrl;
	this.questionDes = userName + "为什么教育这么重要为什么教育这么重要为什么教育这么重要为什么教育这么重要?";
	this.quesImg = quesImg;
	this.attentionNum = attentionNum;
	this.askNum = askNum;
	this.qtype = qtype;
}

module.exports = QuestionModel;