import { useState, useCallback } from "react";
import "./App.css";

const useToggle = (arr, index = 0) => {
	const [arrIndex, setArrIndex] = useState(index);
	const toggle = useCallback(() => {
		return setArrIndex((prev) => (prev >= arr.length - 1 ? 0 : prev + 1));
	}, [arr]);

	return [toggle, arr[arrIndex]];
};

function App() {
	const [toggle, value] = useToggle([1, 2, 3, 4, 5], 2);
	return (
		<div className="App">
			<h1>Value : {value}</h1>
			<button onClick={toggle}>Toggle</button>
		</div>
	);
}

export default App;
