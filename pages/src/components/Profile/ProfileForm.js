import { useRef } from "react";

function ProfileForm(props) {
	const oldPasswordRef = useRef();
	const newPasswordRef = useRef();

	function submitHandler(event) {
		event.preventDefault();

		const enteredOldPassword = oldPasswordRef.current.value;
		const enteredNewPassword = newPasswordRef.current.value;

		// optional: Add validation

		props.onChangePassword({
			oldPassword: enteredOldPassword,
			newPassword: enteredNewPassword,
		});
	}

	return (
		<form onSubmit={submitHandler}>
			<div className="inputBox">
				{/* <label htmlFor='email'>Your Email</label> */}
				<input
					className="input border-bottom-right-glass"
					type="password"
					placeholder="new password"
					id="new-password"
					required
					ref={newPasswordRef}
				/>
			</div>
			<div className="inputBox">
				{/* <label htmlFor='password'>Your Password</label> */}
				<input
					className="input border-bottom-right-glass"
					type="password"
					placeholder="old password"
					id="old-password"
					required
					ref={oldPasswordRef}
				/>
			</div>
			<div className="inputBox">
				<input
					className="input border-bottom-right-glass text-[#666] bg-white max-w-[100px] cursor-pointer mb-[20px] font-semibold"
					type="submit"
					// value="Login"
					value="Change Password"
					// onClick={() => router.push("/dashboard")}
					// onClick={() => {
					// 	signIn({ session });
					// 	router.push("/dashboard");
					// }}
				/>
			</div>
			{/* <p className="mt-[5px] text-white">
								Forgot Password?{" "}
								<a className="font-semibold" href="#">
									Click Here
								</a>
							</p> */}
		</form>
	);
}

export default ProfileForm;
