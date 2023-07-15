/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
	username: z.string().nonempty("username is required"),
	email: z.string().nonempty("email is required").email("Email format is not valid"),
	channel: z.string().nonempty("channel is required"),
});

type FormProps = {
	username: string;
	email: string;
	channel: string;
};

let renderCount = 0;

const ZodYoutubeForm = () => {
	const form = useForm<FormProps>({
		defaultValues: {
			username: "",
			email: "",
			channel: "",
		},
		resolver: zodResolver(schema),
	});

	const { register, handleSubmit, formState, control } = form;

	const { errors } = formState;

	const onSubmit = (data: FormProps) => {
		console.log({ data });
	};

	renderCount++;

	return (
		<div>
			<h2>Zod Youtube form</h2>
			<h6>zod component render Count : {renderCount / 2}</h6>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>
				<div className="form-control">
					<label htmlFor="username">Username</label>
					<input type="text" id="username" {...register("username")} />
					<p className="error">{errors.username?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="email">Email</label>
					<input type="email" id="email" {...register("email")} />
					<p className="error">{errors.email?.message}</p>
				</div>

				<div className="form-control">
					<label htmlFor="channel">Channel</label>
					<input type="text" id="channel" {...register("channel")} />
					<p className="error">{errors.channel?.message}</p>
				</div>

				<button>Submit</button>
			</form>
			<DevTool control={control} />
		</div>
	);
};

export default ZodYoutubeForm;
