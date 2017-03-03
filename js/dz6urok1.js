setInterval(function() {
	console.clear();
	var date = new Date();
	var str = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
	console.log(str);
}, 1000);