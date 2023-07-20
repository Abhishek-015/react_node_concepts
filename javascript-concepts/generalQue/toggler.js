// PS - toggle the arguments on each call
const toggle = (...args) => {
	let index = 0;

	return function () {
		if (args.length) {
			console.log(args[index++]);
			if (index >= args.length) {
				index = 0;
			}
		}
	};
};
const hello = toggle("1", "2", "3");

hello();
hello();
hello();
hello();
hello();
hello();
hello();
hello();
