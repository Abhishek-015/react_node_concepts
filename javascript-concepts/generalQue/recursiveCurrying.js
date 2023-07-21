// PS - return the sum of all sum(10)(20,30)(40)...()

//solution -1

// function sum(...args) {
// 	let argsArray = [...args];
// 	//base case
// 	if (args.length === 0) {
// 		return 0;
// 	}

// 	const temp = function (...args2) {
// 		argsArray.push(...args2);
// 		if (args2.length === 0) {
// 			return argsArray.reduce((a, b) => a + b, 0);
// 		} else {
// 			return temp;
// 		}
// 	};

// 	return temp;
// }

//solution 2

const sum = (...a) => {
	return function (...args) {
		if (args.length) {
			return sum(...a, ...args);
		} else {
			return a.reduce((acc, curr) => acc + curr);
		}
	};
};

let total = sum(10,20)(30)(30)();
console.log(total);
