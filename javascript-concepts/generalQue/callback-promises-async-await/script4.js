// create a function that resolves the promises recursively

function promise1(key) {
	return new Promise((res, rej) => {
		setTimeout(() => res(key), 1000);
	});
}

function promise2(key) {
	return new Promise((res, rej) => {
		setTimeout(() => res(key), 2000);
	});
}

function promise3(key) {
	return new Promise((res, rej) => {
		setTimeout(() => res(key), 3000);
	});
}

function resolvePromiseRecursively(promises) {
	if (promises.length === 0) return;
	const promise = promises.shift();
	promise.then((res) => console.log(res));
	resolvePromiseRecursively(promises);
}

resolvePromiseRecursively([promise1("promise 1"), promise2("promise 2"), promise3("promise 3")]);
