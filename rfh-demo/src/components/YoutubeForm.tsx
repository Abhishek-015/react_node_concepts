/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import { useEffect } from "react";
import { useForm, useFieldArray, FieldErrors } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

let renderCount = 0;

type formValuesProps = {
	username: string;
	email: string;
	channel: string;
	social: {
		twitter: string;
		facebook: string;
	};
	phoneNumber: string[];
	phNumberList: { number: string }[];
	age: number;
	dob: Date;
};
const YoutubeForm = () => {
	const form = useForm<formValuesProps>({
		defaultValues: {
			username: "Batman",
			email: "abhi@gmail.com",
			channel: "",
			social: {
				twitter: "",
				facebook: "facebookprofile",
			},
			phoneNumber: ["7455895429", "7455895532"],
			phNumberList: [{ number: "7837823232" }],
			age: 6,
			dob: new Date(),
		},
		mode: "onChange",
	});

	const { register, control, handleSubmit, formState, watch, getValues, setValue, reset, trigger } =
		form;

	const {
		errors,
		dirtyFields,
		touchedFields,
		isDirty,
		isValid,
		isSubmitting,
		isSubmitted,
		isSubmitSuccessful,
		submitCount,
	} = formState;

	console.log({ dirtyFields, touchedFields, isDirty, isValid });

	console.log({ isSubmitting, isSubmitted, isSubmitSuccessful, submitCount });

	const { fields, append, remove } = useFieldArray({
		name: "phNumberList",
		control,
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
		}
	}, [isSubmitSuccessful, reset]);

	// useEffect(() => {
	// 	const subscribe = watch((value) => console.log(value));

	// 	return () => subscribe.unsubscribe();
	// }, [watch]);

	const handleGetValues = () => console.log("values===>", getValues(["username", "age", "email"]));

	const handleSetValues = () => {
		setValue("username", "", { shouldValidate: true, shouldDirty: true, shouldTouch: true });
	};

	const onError = (errors: FieldErrors<formValuesProps>) => {
		console.log({ errors });
	};

	const onSubmit = (data: formValuesProps) => {
		console.log("form submitted", data);
	};
	renderCount++;
	return (
		<div>
			<h1>Youtube count : {renderCount / 2}</h1>
			{/* <p>{JSON.stringify(watchFormFields)}</p> */}
			<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
				<div className="form-control">
					<label htmlFor="username">User name</label>
					<input
						type="text"
						id="username"
						{...register("username", { required: { value: true, message: "Username is required" } })}
					/>
					<p className="error">{errors.username?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input
						type="email"
						id="email"
						{...register("email", {
							required: { value: true, message: "email is required" },
							pattern: { value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/, message: "Invalid email" },
							validate: {
								notAdmin: (fieldValue) => {
									return fieldValue !== "admin@example.com" || "Enter a different email address";
								},
								notBlackListed: (fieldValue) => {
									return !fieldValue.endsWith("baddomain.com") || "This email domain is not supported";
								},
								emailAvailable: async (fieldValue) => {
									const respose = await fetch(
										`https://jsonplaceholder.typicode.com/users?email=${fieldValue}`
									);

									const data = await respose.json();

									return data.length === 0 || "Email already exist";
								},
							},
						})}
					/>
					<p className="error">{errors.email?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input
						type="text"
						id="channel"
						{...register("channel", { required: { value: true, message: "channel is required" } })}
					/>
					<p className="error">{errors.channel?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="age">Age</label>
					<input
						type="number"
						id="age"
						{...register("age", {
							valueAsNumber: true,
							required: { value: true, message: "age is required" },
						})}
					/>
					<p className="error">{errors.age?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="dob">Date of Birth</label>
					<input
						type="date"
						id="dob"
						{...register("dob", {
							valueAsDate: true,
							required: { value: true, message: "Date of birth is required" },
						})}
					/>
					<p className="error">{errors.dob?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="twitter">twitter</label>
					<input
						type="text"
						id="twitter"
						{...register("social.twitter", {
							disabled: watch("channel") === "",
							required: { value: true, message: "twitter is required" },
							pattern: {
								value: /^[A-Za-z0-9_]{1,15}$/,
								message: "Username should be less than 15 charachter.",
							},
						})}
					/>
					<p className="error">{errors.social?.twitter?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="facebook">facebook</label>
					<input
						type="text"
						id="facebook"
						{...register("social.facebook", {
							required: { value: true, message: "facebook is required" },
							pattern: {
								value: /^[A-Za-z0-9_]{1,15}$/,
								message: "Username should be less than 15 charachter.",
							},
						})}
					/>
					<p className="error">{errors.social?.facebook?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="primary-phone">Primary phone number</label>
					<input
						type="number"
						id="primary-phone"
						{...register("phoneNumber.0", {
							required: { value: true, message: "phone is required" },
							pattern: { value: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: "Invalid mobile number" },
							validate: (fieldValue) => {
								if (
									fieldValue.startsWith("0") ||
									fieldValue.startsWith("1") ||
									fieldValue.startsWith("2") ||
									fieldValue.startsWith("3") ||
									fieldValue.startsWith("4") ||
									fieldValue.startsWith("5")
								) {
									return "Phone no should starts with 6,7,8 or 9";
								}
							},
						})}
					/>
					<p className="error">{errors.phoneNumber?.[0]?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="secondary-phone">Secondary phone number</label>
					<input
						type="number"
						id="secondary-phone"
						{...register("phoneNumber.1", {
							required: { value: true, message: "phone is required" },
							pattern: { value: /^(\+\d{1,3}[- ]?)?\d{10}$/, message: "Invalid mobile number" },
							validate: (fieldValue) => {
								if (
									fieldValue.startsWith("0") ||
									fieldValue.startsWith("1") ||
									fieldValue.startsWith("2") ||
									fieldValue.startsWith("3") ||
									fieldValue.startsWith("4") ||
									fieldValue.startsWith("5")
								) {
									return "Phone no should starts with 6,7,8 or 9";
								}
							},
						})}
					/>
					<p className="error">{errors.phoneNumber?.[1]?.message}</p>
				</div>
				<div>
					<label htmlFor="phone-list">Phone Number List</label>
					<div>
						{fields.map((field, index) => {
							return (
								<div className="form-control" key={field.id}>
									<input type="text" {...register(`phNumberList.${index}.number` as const)} />{" "}
									{index > 0 && (
										<button type="button" onClick={() => remove(index)}>
											Remove
										</button>
									)}
								</div>
							);
						})}
						<button type="button" onClick={() => append({ number: "" })}>
							Add phone number
						</button>
					</div>
				</div>

				<button disabled={!isDirty || isSubmitting}>Submit</button>
				<button type="button" onClick={() => reset()}>
					Reset
				</button>
				<button type="button" onClick={handleGetValues}>
					Get Values
				</button>
				<button type="button" onClick={handleSetValues}>
					Set Values
				</button>
				<button type="button" onClick={() => trigger("channel")}>
					validate
				</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default YoutubeForm;
