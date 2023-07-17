import { render, screen } from "@testing-library/react";
import Greet from "./greet";

//TDD(Test driven deployment --> here we write the test cases before the code has to be written)
// Greet component should render the text hello and if the name component is passed then it should render the text hello folowed by name

describe("Greet", () => {
	test("rendered successfully", () => {
		render(<Greet />);
		const textElement = screen.getByText(/Hello/);
		expect(textElement).toBeInTheDocument();
	});

	// describe("Nested", () => {
	// 	test("renders with names", () => {
	// 		render(<Greet name="abhishek" />);
	// 		const textElement = screen.getByText("Hello abhishek");
	// 		expect(textElement).toBeInTheDocument();
	// 	});
	// });
});
