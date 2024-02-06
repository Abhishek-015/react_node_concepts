const add = (...params) => {
	return function (...args) {
		if (args.length) {
			return add();
		}
	};
};

console.log(add(4)(5)(3)(8)());
