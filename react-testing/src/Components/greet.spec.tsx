import { render, screen } from "@testing-library/react";
import Greet from "./greet";

//TDD(Test driven deployment --> here we write the test cases before the code has to be written)
// Greet component should render the text hello and if the name component is passed then it should render the text hello folowed by name

//test === it
//To compile test.only === fit
//To compile test test.skip === xit
describe("Greet", () => {
	it("rendered successfully", () => {
		render(<Greet />);
		const textElement = screen.getByText(/hello/i);
		expect(textElement).toBeInTheDocument();
	});

	it("renders with names", () => {
		render(<Greet name="abhishek" />);
		const textElement = screen.getByText("Hello abhishek");
		expect(textElement).toBeInTheDocument();
	});
});
