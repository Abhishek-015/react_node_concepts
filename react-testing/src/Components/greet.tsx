import { GreekProps } from "./greet.types";

const Greet = (props: GreekProps) => {
	return <div>Hello {props.name ? props.name : "Guests"}</div>;
};

export default Greet;
