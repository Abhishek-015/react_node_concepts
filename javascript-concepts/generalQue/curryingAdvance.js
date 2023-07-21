// PS -  const curriedSum = curry(sum)
//       const sum = (a,b,c,d,e) => a+b+c+d+e   sum will always only take 5 arguments and return the sum of the five arguments
//       curriedSum(1,2,3,4,5) curriedSum(1)(2,3)(4,5) curriedSum(1)(2,3,4)(5)
//       create the respective curry function that will execute the above explained scenario.

const curry = (fn) => {
	const anotherCurry = (...args) => {
		if (args.length >= fn.length) {
			return fn(...args);
		} else {
			const temp = (...args2) => {
				return anotherCurry(...args, ...args2);
			};
			return temp;
		}
	};

	return anotherCurry;
};

const sum = (a, b, c, d, e) => a + b + c + d + e;

const curriedSum = curry(sum);

console.log(curriedSum(1, 2, 3, 4, 5));
console.log(curriedSum(1)(2, 3)(4, 5));
console.log(curriedSum(1)(2, 3, 4)(5));
