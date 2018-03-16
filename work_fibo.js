var gloapData = []
process.on('message', m => {
  // console.log('接受到父进程传过来的值', m);
  aa(m)
});

function aa (data) {
	// console.log(data+'1111111')
	const ee = []
	if (gloapData.length > 0) {
		/* const date = new Date()
		for (var i = data.data.items.length - 1; i >= 0; i--) {
			// console.log(new Date().getTime(), data.data.items[i].created)
			if(new Date().getTime() === data.data.items[i].created){
				process.send(data.data.items[i]);
			}
		} */
		let b = []
		data.data.items.forEach((e, item) => {
			let a = true
			gloapData.forEach((i) => {
				if(e.id === i.id){
					return a = false
				}
			})
			if(a){
				b.push(e)
			}
		})
		if(b.length > 0){
			return process.send(data.data.items[i]);
		}
		console.log('无新公告！！！')
	}
	gloapData = data.data.items
}


/*
setTimeout(() => {
  process.send('发送给父进程');
  process.exit()
}, 2000);
*/