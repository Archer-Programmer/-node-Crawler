var https = require('https');
var config = require('./config.js')
/* 
// 获取数据 */
var url = config.sendUrl;
function sendRequest (callback) {
	var dataHtml = '';
	var emaiHtml = '';
	var request  = https.request(url, function (res) {
		res.setEncoding('utf-8')
		res.on('data', function(data) {
			dataHtml += data
		})
		res.on('end', function() {
			var data = JSON.parse(dataHtml)
			callback(data)
		})
	});
	request.on('error',function(err){
		console.log('失败'+err.message)
	})
	request.end();
}

module.exports = sendRequest
