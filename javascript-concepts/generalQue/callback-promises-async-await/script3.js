const func = (a, cb) => {
	setTimeout(() => cb(a), 1000);
};

const func1 = (a, cb) => {
	setTimeout(() => cb(a), 0);
};

const func2 = (a, cb) => {
	setTimeout(() => cb(a), 500);
};

//callback hell

// func(3, (msg) => {
// 	console.log(msg);
// 	func1(4, (msg) => {
// 		console.log(msg);
// 		func2(5, (msg) => {
// 			console.log(msg);
// 		});
// 	});
// });

//resolve the callback hell with promises

function promise(text) {
	return new Promise((res, rej) => {
		setTimeout(() => res(text), 500);
	});
}

function promise1(text) {
	return new Promise((res, rej) => {
		setTimeout(() => res(text), 1000);
	});
}
function promise2(text) {
	return new Promise((res, rej) => {
		setTimeout(() => rej(text), 800);
	});
}

// Approach 1 -----> Again pyrimid like structure

// promise("promise resolve 1").then((res) => {
// 	console.log(res);
// 	promise1("promise resolved 2").then((res) => {
// 		console.log(res);
// 		promise2("promise resolved 3").then((res) => {
// 			console.log(res);
// 		});
// 	});
// });

// Approach 2

// promise("promise resolve 1")
// 	.then((res) => {
// 		console.log(res);
// 		return promise1("promise resolve 2");
// 	})
// 	.then((res) => {
// 		console.log(res);
// 		return promise2("promise resolve 3");
// 	})
// 	.then((res) => console.log(res))

// Approach 3 ------------> promise combinator (Promise.all) ---> if any of the promise failed it would throw error rather than resolving the promises

const promiseAll = Promise.all([promise(1), promise1(2), promise2(3)]);

// promiseAll.then((res) => console.log(res)).catch((err) => console.log("Promise failed", err));

// Approach 3 ------------> promise combinator (Promise.race) ---> will return the fastest resolved or rejected promise

const promiseRace = Promise.race([promise(1), promise1(2), promise2(3)]);

// promiseRace.then((res) => console.log(res)).catch((err) => console.log("Promise failed", err));

// Approach 4 ------------> promise combinator (Promise.any) ---> will return the 1st fullfill promise and ignorees thr rejected one and in case if all the promises rejected ,

const promiseAny = Promise.any([promise(1), promise1(2), promise2(3)]);

// promiseAny.then((res) => console.log(res)).catch((err) => console.log("Promise failed", err));

// Approach 5 ------------> promise handling with async and await

const result = async () => {
	try {
		const promiseOne = await promise("promise 1");
		const promiseTwo = await promise1("promise 2");
		const promiseThree = await promise2("promise 3");

		console.log({ promiseOne, promiseTwo, promiseThree });
	} catch (err) {
		console.error("Promises failed", err);
	}
};

result();
