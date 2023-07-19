import { useState } from "react";
import "./App.css";

function App() {
	const [formState, setFormState] = useState({
		track: 0,
		email: "",
		password: "",
		emailError: "",
		passordError: "",
	});

	const handleSubmit = (e) => {
		e.preventDefault();
		if (formState.email.trim()) {
			setFormState((prev) => ({ ...prev, track: 1 }));
		} else {
			setFormState((prev) => ({ ...prev, emailError: "Please enter a valid email address" }));
		}
	};

	const handlePasswordSubmit = (e) => {
		e.preventDefault();
		if (formState.password.trim()) {
			alert("Login successsful");
		} else {
			setFormState((prev) => ({ ...prev, passordError: "Please enter a valid password" }));
		}
	};

	return (
		<div className="App">
			{formState.track === 0 ? (
				<form onSubmit={handleSubmit}>
					<h2>Login form</h2>
					<div className="form-control">
						<label htmlFor="email">Email</label>
						<input
							type="text"
							id="email"
							name="email"
							value={formState.email}
							onChange={(e) =>
								setFormState((prev) => ({ ...prev, email: e.target.value, emailError: "" }))
							}
						/>
						<p className="error">{formState.emailError?.length ? formState.emailError : ""}</p>
						<button>Verify Email</button>
					</div>
				</form>
			) : (
				<form onSubmit={handlePasswordSubmit}>
					<div className="form-control">
						<label htmlFor="password">Email</label>
						<input type="email" id="email" name="email" value={formState.email} disabled={true} />
						<label htmlFor="password">Password</label>
						<input
							type="password"
							id="password"
							name="password"
							value={formState.password}
							onChange={(e) =>
								setFormState((prev) => ({ ...prev, password: e.target.value, passordError: "" }))
							}
						/>
						<p className="error">{formState.passordError?.length ? formState.passordError : ""}</p>
						<button type="button" onClick={() => setFormState((prev) => ({ ...prev, track: 0 }))}>
							Change email
						</button>
						<button>Submit</button>
					</div>
				</form>
			)}
		</div>
	);
}

export default App;
