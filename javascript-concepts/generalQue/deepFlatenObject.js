const obj = {
	a: 12,
	b: 23,
	c: {
		p: 4,
		o: {
			l: 50,
		},
		q: [1, 2],
	},
};

// output = {
// 	a: 12,
// 	b: 23,
// 	"c.p": 4,
// 	"c.o.l": 50,
// 	"c.q.0": 1,
// 	"c.q.1": 2,
// };

const solution = (obj, prefix = "") => {
	let object = {};
	for (let key in obj) {
		let val = obj[key];
		let newKey = prefix === "" ? key : prefix + "." + key;
		if (val !== null && typeof val === "object") {
			let helper = solution(val, newKey);
			object = { ...object, ...helper };
		} else {
			object[newKey] = val;
		}
	}
	return object;
};

console.log(solution(obj));
