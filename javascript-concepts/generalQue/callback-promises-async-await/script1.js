//callbacks

console.log("start");

const func = (a, cb) => {
	setTimeout(() => cb(a), 1000);
};

const func1 = (a, cb) => {
	setTimeout(() => cb(a), 0);
};

const func2 = (a, cb) => {
	setTimeout(() => cb(a), 500);
};

//callback hell situation

func(3, (msg) => {
	console.log(msg);
	func1(4, (msg) => {
		console.log(msg);
		func2(5, (msg) => {
			console.log(msg);
		});
	});
});

console.log("stop");

