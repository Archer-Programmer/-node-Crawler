var config = require('./config.js')
//发送邮件
var nodeEmail = require('./nodeEmail.js')

// 发送请求
var sendRequest = require('./nodeSendRequest.js')

// 创建进程需要的模块
var child_process = require('child_process');

/* 处理数据
	node多线程处理数据
	主进程获取数据，子进程对数据做处理，比对是否需要发送邮件
	process是一个全局进程(node主进程)
	每一个子进程都是一个新的node进程
*/
function spawn() {
	const p = child_process.fork('work_fibo.js', {});
	console.log('child pid:', p.pid);

	p.on('exit', code => {
	  console.log('子进程结束', code);
	  if (code !== 0) {
	  	spawn()
	  }
	});
	p.on('message', m => {
	  console.log('message from child: ', m);
	  nodeEmail(config.addresseeEmail, '火币有新公告！！！！！！！！', m)
	});
}
spawn()


/* 每隔一秒发送一次请求 */
setInterval(function() {
	sendRequest(function (data) {
		p.send(data);
	})
}, 1000)


