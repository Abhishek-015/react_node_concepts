// PS : Create a function fn(obj)(1,1,1)
const obj = {
	a: {
		b: (a, b, c) => a + b + c,
		c: (a, b, c) => a + b - c,
	},
	d: (a, b, c) => a - b - c,
	e: 1,
	g: "",
	f: [1, 2, 3],
	h: null,
};

// output : obj = {a : { b : 3, c : 1 }, d : -1}

const fn = (obj) => {
	return function (...args) {
		for (let key in obj) {
			const value = obj[key];
			if (typeof value === "function") {
				obj[key] = value(...args);
			} else if (value && typeof value === "object" && !Array.isArray(value)) {
				fn(value)(...args);
			} else {
				delete obj[key];
			}
		}
	};
};

fn(obj)(1, 1, 1);

console.log(obj);
