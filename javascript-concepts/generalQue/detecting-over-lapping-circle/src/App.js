import React, { useEffect, useState } from "react";
import "./App.css";
import DrawCircle from "./components/DrawCircle";

//PS : The prompt that was pasted into the IDE was something like "Let a user draw two circles on the screen. Change the color of the circles if they overlap". Functional requirements that I got after asking questions paraphrased below:

// When the user clicks the left mouse button, the center of a circle is placed. When the user releases the left mouse button, a circle with the corresponding radius is created. The circle should scale in real time as the user is dragging the mouse which holding left click.
// The same is true for the right mouse button, except a second circle is placed.
// Another click-drag of the left or right mouse buttons replaces the associated circle.
// If the user left clicks with no dragging, clear the circles.
// If the circles overlap, they should change color.

const RADIUS = 50;

function App() {
	const [circleCord, setCircleCord] = useState([]);

	useEffect(() => {
		document.addEventListener("click", createCircle);

		return () => document.removeEventListener("click", createCircle);
	}, []);

	const createCircle = (e) => {
		const { clientX, clientY } = e;

		console.log(clientX, clientY);

		const newCircleCord = {
			top: clientY - RADIUS,
			left: clientX - RADIUS,
			bottom: clientY + RADIUS,
			right: clientX + RADIUS,
			background: "red",
		};

		setCircleCord((prev) => [...prev, newCircleCord]);
	};
	return (
		<div className="App">
			{circleCord.map((circle) => (
				<DrawCircle radius={RADIUS} {...circle} key={circle.top + circle.bottom + circle.background} />
			))}
		</div>
	);
}

export default App;
