// resolving above with promises

console.log("start1");

const res = new Promise((res, rej) => {
	setTimeout(() => {
		const data = true;
		if (data) {
			res("Promise resolved");
		} else {
			rej(new Error("Not able to resolve promise"));
		}
	}, 1000);
});

console.log(res);

res.then((res) => console.log(res)).catch((err) => console.error(err));

//other approach to write promise

// const res1 = Promise.resolve("Promise resolved");

// res1.then((res) => console.log(res));

console.log("stop2");
