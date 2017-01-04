
/*
 *  用户model
 */

function UserModel (serverDic){
	this.phone = serverDic.phone;
	this.userName = serverDic.userName;
	this.userShortIntro = serverDic.userShortIntro;
	this.userLongIntro = serverDic.userLongIntro;
	this.questionNum = serverDic.questionNum;
	this.askNum = serverDic.askNum;
	this.attentionNum = serverDic.attentionNum;
	this.beAttentionNum = serverDic.beAttentionNum;
	this.userIconUrl = serverDic.userIconUrl;
}

module.exports = UserModel;