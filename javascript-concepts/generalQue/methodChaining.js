// ps : computeAmount().lacs(15)crore(5).crore(2).lacs(20).thousands(45).crore(7).value()     output : 143545000

const computeAmount = () => {
	let obj = {
		total: 0,
		crore: function (num) {
			this.total += num * Math.pow(10, 7);
			return this;
		},
		lacs: function (num) {
			this.total += num * Math.pow(10, 5);
			return this;
		},
		thousand: function (num) {
			this.total += num * Math.pow(10, 3);
			return this;
		},
		value: function () {
			return this.total;
		},
	};

	return obj;
};

const computeObj = computeAmount();
const computeValue = computeObj.lacs(15).crore(5).crore(2).lacs(20).thousand(45).crore(7).value();
console.log(computeValue);

const compute2 = computeObj.crore(5).value();
console.log(compute2);
