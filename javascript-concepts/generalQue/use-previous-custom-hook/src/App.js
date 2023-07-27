import { useEffect, useRef, useState } from "react";

const usePrevious = (countValue) => {
	const ref = useRef(null);
	useEffect(() => {
		ref.current = countValue;
	}, [countValue]);

	return ref.current;
};

function App() {
	const [count, setCount] = useState(0);
	const previousCount = usePrevious(count);
	return (
		<div style={{ textAlign: "center" }}>
			{" "}
			<h2 className="App">Current Count : {count}</h2>
			<h2>Previous Count : {previousCount}</h2>
			<button onClick={() => setCount((prev) => prev + 1)}>Inc count</button>
		</div>
	);
}

export default App;
