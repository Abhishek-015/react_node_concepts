// memmoized function only works for pure functons, pure functions are those that will return the same value for same argument passed.
// eg: const pureFunc = (x) => x + 1  , this is pure function
// eg : let track = 0; const impureFunc = (x) => x + 1 + track++  , this is a impure function because it wil always return different value for even same argument passed

// memoized function returns a cachced value and improve the performance because it prevent recomputaion of expensive opererations for same argument passed

const memoized = (func) => {
	let tempObject = {};
	return function (args) {
		if (tempObject.hasOwnProperty(args)) {
			return tempObject[args];
		} else {
			const computedValue = func(args);
			tempObject = { ...tempObject, [args]: computedValue };
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

const memoizedFunc = memoized(factorial);

console.time("test timer")
console.log(memoizedFunc(102));
console.timeEnd("test timer")

console.time("test timer")
console.log(memoizedFunc(102));
console.timeEnd("test timer")

// console.log(memoizedFunc(4));
// console.log(memoizedFunc(5));
// console.log(memoizedFunc(4));
// console.log(memoizedFunc(2));
