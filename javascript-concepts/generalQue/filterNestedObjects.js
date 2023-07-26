//Ps: filter the nested object through filter method filter(n => n > 0), now check if parent key is empty or not, if empty remove that field , if not remove the field with value smaller than 0

const obj = {
	a: 1,
	b: {
		c: 2,
		d: -3,
		e: {
			f: {
				g: -4,
				z: null,
			},
		},
		h: {
			i: 5,
			j: 6,
		},
	},
	c: [1, 2],
};

// output : obj = {a:1, b: {c:2},h:{i:5,j:6}}

const filterfunc = (n) => n > 0;

function filterNestedObj(obj, filterfunc) {
	for (let key in obj) {
		const val = obj[key];

		if (val && typeof val === "object" && !Array.isArray(val)) {
			filterNestedObj(val, filterfunc);
		} else {
			if (filterfunc(val) === false) {
				delete obj[key];
			}
		}
		if (JSON.stringify(val) === "{}") {
			delete obj[key];
		}
	}
}

filterNestedObj(obj, filterfunc);
console.log(obj);
