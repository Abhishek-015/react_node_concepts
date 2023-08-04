// memmoized function only works for pure functons, pure functions are those that will return the same value for same argument passed.
// eg: const pureFunc = (x) => x + 1  , this is pure function
// eg : let track = 0; const impureFunc = (x) => x + 1 + track++  , this is a impure function because it wil always return different value for even same argument passed

// memoized function returns a cachced value and improve the performance because it prevent recomputaion of expensive opererations for same argument passed

const memoized = (func) => {
	let tempObject = {};
	return function (...args) {
		const cache = JSON.stringify(args);
		if (tempObject.hasOwnProperty(cache)) {
			return tempObject[cache];
		} else {
			const computedValue = func(...args);
			tempObject = { ...tempObject, [cache]: computedValue };
			return computedValue;
		}
	};
};

function factorial(n) {
	if (n == 0 || n == 1) {
		return 1;
	}

	return factorial(n - 1) * n;
}

const fn = (x) => x * 10;

const expensiveFunction = (num1 = 1, num2 = 1) => {
	for (var i = 0; i < 10000000; i++) {}
	return num1 * num2;
};

const memoizedFunc = memoized(factorial);

// console.time("test timer");
// console.log(memoizedFunc(102));
// console.timeEnd("test timer");

// console.time("test timer");
// console.log(memoizedFunc(102));
// console.timeEnd("test timer");

console.time("test timer 2");
console.log(expensiveFunction(2, 3));
console.timeEnd("test timer 2");

console.time("test timer 2");
console.log(expensiveFunction(2, 3));
console.timeEnd("test timer 2");

// console.log(memoizedFunc(4));
// console.log(memoizedFunc(5));
// console.log(memoizedFunc(4));
// console.log(memoizedFunc(2));
