function helper(arr) {
	this.arr = [...arr];
	this.index = -1;
	this.next = function () {
		if (this.index >= this.arr.length - 1) {
			return null;
		} else {
			return this.arr[++this.index];
		}
	};

	this.done = function () {
		if (this.index === this.arr.length - 1) {
			return true;
		} else {
			return false;
		}
	};
}

const iterartor = new helper([1, 2, "hello"]);

iterartor.next();
iterartor.next();
iterartor.done();
iterartor.next();
iterartor.done();
console.log(iterartor.next());
