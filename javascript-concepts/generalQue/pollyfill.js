//map

Array.prototype.mapPollyfil = function (callback) {
	const arr = [];

	for (let i = 0; i < this.length; i++) {
		arr.push(callback(this[i], i, this));
	}

	return arr;
};

const numArr = [1, 2, 3, 4, 5];

const sqaure = (x) => {
	return x * x;
};

const data = numArr.mapPollyfil(sqaure);

console.log({ data, numArr });

//filter

Array.prototype.filterPollyfil = function (callback) {
	const newArr = [];
	for (let i = 0; i < this.length; i++) {
		const check = callback(this[i], i, this);
		if (check) {
			newArr.push(check);
		}
	}
	return newArr;
};

const filterData = (x) => {
	if (x % 2 == 0) {
		return x;
	}
};

const res = numArr.filterPollyfil(filterData);

console.log(res);

//reduce

Array.prototype.reducePollyfil = function (callback, acc) {
	var accValue = acc;
	for (let i = 0; i < this.length; i++) {
		accValue = accValue !== undefined ? callback(accValue, this[i], i, this) : this[i];
	}

	return accValue;
};

const sum = (acc, x) => {
	return acc + x;
};

console.log(numArr.reducePollyfil(sum, ""));
