function curry() {
	let sum = 0;
	return function (num = 0) {
		sum += num;
		console.log(sum);
	};
}
let sum = curry();
sum(4);
sum(5);
sum(5);
sum();
