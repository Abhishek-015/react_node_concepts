//  PS - create a function that takes two argument one as message and second as count number, this function will only return the output as message when it is called equal to count number of times.
//  Eg : sampler("hello",4) ---> when sampler is called 4th time then only it should print "hello"

function sampler(messageFunc, count = 1) {
	let functionCallCount = 0;
	return function () {
		functionCallCount++;
		if (functionCallCount === count) {
			messageFunc();
			functionCallCount = 0;
		}
	};
}

function message() {
	console.log("hello world");
}

const sample = sampler(message, 3);

sample();
sample();
sample();
sample();
sample();
sample();
