function browserHistory() {
	this.history = [];
	this.index = -1;

	this.visitURL = function (url) {
		this.history.push(url);
		this.index = this.index + 1;
	};

	this.current = function () {
		if (this.index < 0) {
			return "Blank Page";
		} else {
			return this.history[this.index];
		}
	};

	this.backword = function () {
		if (this.index < 0) {
			return "Blank Page";
		} else {
			return this.history[--this.index];
		}
	};

	this.forward = function () {
		if (this.index >= this.history.length - 1) {
			return this.history[this.index];
		} else {
			return this.history[++this.index];
		}
	};
}

const browse = new browserHistory();

browse.visitURL("A");
browse.backword();
browse.forward();
browse.visitURL("google.com");
browse.forward();
browse.backword()
browse.forward();
browse.backword()
browse.backword()


console.log(browse.current());
