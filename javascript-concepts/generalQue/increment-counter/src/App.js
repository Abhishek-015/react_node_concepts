//PS : create two button start and pause , on click start counter incrementd by 1 in 1sec and on pause ir should pause and on again start it should resume .

import { useState, useRef, useEffect } from "react";
import "./App.css";

// function App() {
// 	const [counter, setCounter] = useState(0);

// 	const counterRef = useRef(null);

// 	const onStart = () => {
// 		counterRef.current = setInterval(() => setCounter((prev) => prev + 1), 1000);
// 	};

// 	const onPause = () => clearInterval(counterRef.current);

// 	return (
// 		<>
// 			{" "}
// 			<h1 className="App">Counter : {counter}</h1>
// 			<div style={{ textAlign: "center" }}>
// 				<button onClick={onStart}>Start</button>
// 				<button onClick={onPause}>Pause</button>
// 			</div>
// 		</>
// 	);
// }

function App() {
	const [counter, setCounter] = useState(0);
	const [start, setStart] = useState(false);

	const counterRef = useRef(null);

	useEffect(() => {
		if (start) {
			counterRef.current = setTimeout(() => setCounter(counter + 1), 1000);
		}

		return () => clearInterval(counterRef.current);
	}, [start, counter]);

	const onStart = () => {
		setStart(true);
	};

	const onPause = () => {
		clearTimeout(counterRef.current);
		setStart(false);
	};

	return (
		<>
			{" "}
			<h1 className="App">Counter : {counter}</h1>
			<div style={{ textAlign: "center" }}>
				<button onClick={onStart}>Start</button>
				<button onClick={onPause}>Pause</button>
			</div>
		</>
	);
}

export default App;
