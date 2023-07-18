export const Application = () => {
	return (
		<>
			<h1>Job application form</h1>
			<h2>Heading 1</h2>
			<p>All fields are mandatory</p>
			<span title="close">x</span>
			<img src="https://via.placeholder.com/150" alt="a person with a laptop" />
			<div data-testid="custom-element">Custom HTML Element</div>
			<form>
				<div>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" placeholder="Full Name" value="Abhishek" onChange={() => {}} />
				</div>
				<div>
					<label htmlFor="bio">Bio</label>
					<input type="text" id="bio" />
				</div>
				<div>
					<label htmlFor="job-location">Name</label>
					<select id="job-location">
						<option value="">Select a country</option>
						<option value="US">Unites states</option>
						<option value="GB">United Kingdom</option>
						<option value="CA">Canada</option>
						<option value="IN">India</option>
						<option value="AU">Australia</option>
					</select>
				</div>
				<div>
					<label>
						{" "}
						<input type="checkbox" id="terms" /> I agree to the terms and conditions
					</label>
				</div>
				<button>Submit</button>
			</form>
		</>
	);
};
