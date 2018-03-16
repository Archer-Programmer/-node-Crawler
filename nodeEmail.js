// 发送邮件需要的模块
var nodemailer = require('nodemailer')
var smtpTransport = require('nodemailer-smtp-transport')
var config = require('./config.js')

/* 发送邮件 
	需要开启pop3/smtp协议，密码为动态密码
*/
const aaa = nodemailer.createTransport(smtpTransport({
	service: config.emailService,
    auth: {
        user: config.senderEmail,
        pass: config.senderPass
    }
}))
// 收件人地址 主题 内容
var sendMail = function (recipient, subject, html) {
	aaa.sendMail({
        from: config.addresseeEmail,
        to: recipient,
        subject: subject,
        html: html		
	}, function (error, response) {
		if(error) {
			return console.log(error)
		}
		console.log('发送成功-------------------------------------------------------------------------!!!!!!!')
	})
}

module.exports = sendMail