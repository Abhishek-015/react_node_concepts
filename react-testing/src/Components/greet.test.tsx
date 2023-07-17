import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// test("Greet rendered successfully", () => {
// 	render(<Greet />);
// 	const textElement = screen.getByText(/hello/i);
// 	expect(textElement).toBeInTheDocument();
// });

//TDD(Test driven deployment --> here we write the test cases before the code has to be written)
// Greet component should render the text hello and if the name component is passed then it should render the text hello folowed by name

test("Greet rendered successfully", () => {
	render(<Greet />);
	const textElement = screen.getByText(/hello/i);
	expect(textElement).toBeInTheDocument();
});

test("Greet renders with name", () => {
	render(<Greet name="abhishek" />);
	const textElement = screen.getByText("Hello abhishek");
	expect(textElement).toBeInTheDocument();
});
