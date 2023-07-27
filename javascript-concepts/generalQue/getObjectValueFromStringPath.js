const get = (obj, path) => {
	path = path.replaceAll("[", ".");
	path = path.replaceAll("]", ".");
	const keys = path.split(".").filter(Boolean);
	let res = obj;
	for (let key of keys) {
		res = res[key];
		if (res === undefined) {
			return undefined;
		}
	}
	return res;
};

console.log(get({ developer: "Software Developer" }, "developer"));
console.log(get({ developer: { firstName: "Tom", lastName: "Cruz" } }, "developer.lastName"));
console.log(get([{ developer: "Tom" }, { count: [0, 1] }], "[1].count[0]"));
console.log(get([{ developer: "Abhishek" }, [0, null]], "[1][1]"));
console.log(get([{ developer: "Abhishek" }, [0, null]], "[1][3]"));
