import React from "react";

const DrawCircle = ({ top, left, background, radius }) => {
	return (
		<div
			style={{
				width: radius * 2,
				height: radius * 2,
				position: "absolute",
				top,
				left,
				background,
				borderRadius: "50%",
			}}
		></div>
	);
};

export default DrawCircle;
