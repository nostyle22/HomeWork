function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var arr= new Array(30);

for (var i=0; i < arr.length;i++) {
	arr[i]=rand(1,100)
}

console.log(arr);