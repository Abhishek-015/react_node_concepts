// var num = 123;
// num = num + "";

// var str = "";
// console.log(num.length);
// for (var i = num.length; i > 0; i--) {
// 	str += i;
// }

// console.log(str);

// function addArrays(arr1, arr2, arr3) {
// 	return [...arr1, ...arr2, ...arr3];
// }

// const res = addArrays([2, 3, 4], [6, 4, 9], [34, 6, 4]);

// console.log(res);

function letterCount(str, char) {
	let count = 0;
	str = str.toLowerCase();
	for (let i = 0; i < str.length; i++) {
		if (str[i] === char) {
			count++;
		}
	}

	return count;
}

const result = letterCount("Connect", "c");
console.log(result);
