function rand(min, max) {
	return Math.abs(Math.round(min - 0.5 + Math.random() * (max - min + 1)));
}

var ARRAY_LENGTH = 10;
var arr = new Array(ARRAY_LENGTH)
for (i = 0; i < ARRAY_LENGTH; i++) {
	arr[i] = [];
	for (j = 0; j < ARRAY_LENGTH; j++) {
		arr[i][j] = rand(1, 100);
	}

}

console.table(arr);


var arrtop = [];
var arrright = [];
var arrbottom = [];
var arrleft = [];

arrtop = arr[0].slice();
arrtop.pop();
arrbottom = arr[ARRAY_LENGTH - 1].slice();
arrbottom.reverse();
arrbottom.pop();


for (i = 0; i < ARRAY_LENGTH - 1; i++) {
	arrright[i] = arr[i][ARRAY_LENGTH - 1];
	arrleft[i] = arr[ARRAY_LENGTH - 1 - i][0];
}
var arrdone = arrtop.concat(arrright, arrbottom, arrleft);
console.log(arrtop);
console.log(arrright);
console.log(arrbottom);
console.log(arrleft);
console.log(arrdone);