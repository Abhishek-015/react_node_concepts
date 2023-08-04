const memmoized = (fn) => {
	const obj = {};
	return function (...args) {
		var cache = JSON.stringify(args);
		if (!obj[cache]) {
			obj[cache] = fn(...args);
		}
		console.log({ obj });
		return obj[cache];
	};
};

const expensiveFunction = (num1 = 1, num2 = 1) => {
	for (var i = 0; i < 10000000; i++) {}
	return num1 * num2;
};
const res = memmoized(expensiveFunction);

console.time("firstCall");
console.log(res(3, 4));
console.timeEnd("firstCall");

console.time("second call");
console.log(res(3, 4));
console.timeEnd("second call");
