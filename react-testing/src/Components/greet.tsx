type GreekProps = {
	name?: string;
};
const Greet = (props: GreekProps) => {
	return <div>Hello {props.name}</div>;
};

export default Greet;
