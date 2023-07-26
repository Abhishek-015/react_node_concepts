// PS : Create a function that will accept a promise function, retries count and error message, if the retries count is greater than the certain count then only the success message will appear otherwise it will return the error message passed.

const retryTest = () => {
	count = 0;
	return () => {
		return new Promise((res, rej) => {
			count += 1;
			if (count <= 5) {
				rej("I m failed API");
			} else {
				res("I m successfull");
			}
		});
	};
};

// by then and catch method

const retry = (func, retriesCount, finalError) => {
	return new Promise((resolve, reject) => {
		func().then(resolve, (err) => {
			if (retriesCount === 1) {
				reject(finalError);
			}
			retry(func, retriesCount - 1, finalError).then(resolve, reject);
		});
	});
};

//by async and await method

const retryByAsync = async (func, retriesCount, finalError) => {
	try {
		const res = await func();
		return res;
	} catch (err) {
		if (retriesCount === 1) {
			return Promise.reject(finalError);
		}
		return retryByAsync(func, retriesCount - 1, finalError);
	}
};

retry(retryTest(), 5, "I m a failure api").then(
	(val) => console.log(val),
	(err) => console.log(err)
);

// retryByAsync(retryTest(), 5, "I m a failure api").then(
// 	(val) => console.log(val),
// 	(err) => console.log(err)
// );
