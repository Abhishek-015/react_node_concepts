// create a pausable auto incrementor in js, which takes an initial value ans steps as input and increments the intial value with given steps every second. the incrementor can be paused and resumed back.

const incrementor = (initial = 0, step = 1) => {
	let timerId = null;
	let count = initial;
	const startTimer = () => {
		if (timerId === null) {
			timerId = setInterval(() => {
				console.log(count);
				count += step;
			}, 1000);
		}
	};

	const stopTimer = () => {
		clearInterval(timerId);
		timerId = null;
	};

	return {
		startTimer,
		stopTimer,
	};
};

const res = incrementor(0, 10);
res.startTimer();

setTimeout(() => res.stopTimer(), 5500);
setTimeout(() => {
	res.startTimer();
}, 6000);
