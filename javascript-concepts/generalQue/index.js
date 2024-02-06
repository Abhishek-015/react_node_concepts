// sum of n natiral numbers-------------------
// function naturalSum(n) {
// 	// let sum = 0;
// 	// for (let i = 0; i <= n; i++) {
// 	// 	sum += i;
// 	// }
// 	// return sum;

// 	return (n * (n + 1)) / 2;
// }

// console.log(naturalSum(5));
// console.log(naturalSum(3));
// console.log(naturalSum(6));
// console.log(naturalSum(7));
// console.log(naturalSum(8));
// console.log(naturalSum(18))

//sum of digits of a number;-----------------------

// function digitSum(num){
// 	let sum = 0;

// 	while(num > 0){
// 		sum = sum + num%10
// 		num = Math.floor(num/10);
// 	}
// 	return sum
// }

// console.log(digitSum(12321))

//count number of digits of a number;---------------------------------

// function digitCount(num) {
// 	num = Math.abs(num);
// 	let count = 0;
// 	do {
// 		count++;
// 		num = Math.floor(num / 10);
// 	} while (num > 0);

// 	return count;
// }

// console.log(digitCount(3484778));

//count numberv of

//find given integer is a palindrome or not--------------------------------

// function isPalindrome(num) {
// 	let realNum = num,
// 		resverse = 0;

// 	while (realNum > 0) {
// 		resverse = resverse * 10 + (realNum % 10);
// 		realNum = Math.floor(realNum / 10);
// 	}

// 	if (num === resverse) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isPalindrome(12121));

//fibonacci number---------------------------------------------------

// function fibonacciNum(num) {
// 	if (num < 2) return num;

// 	let prev = 0,
// 		curr = 1,
// 		next;
// 	for (let i = 2; i <= num; i++) {
// 		next = curr + prev;
// 		curr = next;
// 		prev = curr;
// 	}

// 	return next;
// }

// console.log(fibonacciNum(5));

// find missing number from an array of integers ranging [0,n]---------------------------

// function missingNum(numArr) {
// 	return (numArr.length * (numArr.length + 1)) / 2 - numArr.reduce((acc, i) => acc + i, 0);
// }

// console.log(missingNum([0, 1, 2, 4]));

// Count Odd Numbers in an Interval Range --------------------------------------

function countOdds(low, high) {
	let count = 0;
	for (let i = low; i <= high; i++) {
		if (i % 2 !== 0) count++;
	}
	return count;
}

console.log(countOdds(3, 9));
