import { useState, useRef } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";

async function createUser(email, password) {
	const response = await fetch("/api/auth/signin", {
		method: "POST",
		body: JSON.stringify({ email, password }),
		headers: {
			"Content-Type": "application/json",
		},
	});

	const userData = await response.json();
	if (!response.ok) {
		throw new Error(userData.message || "Something went wrong!");
	}

	return userData;
}

function Authentication() {
	const { data: session, status } = useSession();
	const loading = status === "loading";

	const emailInputRef = useRef();
	const passwordInputRef = useRef();

	const [isLogin, setIsLogin] = useState(true);
	const router = useRouter();

	function switchAuthModeHandler() {
		setIsLogin((prevState) => !prevState);
	}

	async function submitHandler(e) {
		e.preventDefault();

		const enteredEmail = emailInputRef.current.value;
		const enteredPassword = passwordInputRef.current.value;

		// optional: Add validation

		if (isLogin) {
			const result = await signIn("credentials", {
				redirect: false,
				email: enteredEmail,
				password: enteredPassword,
			});

			if (!result.error) {
				router.replace("/profile");
			}
		} else {
			try {
				const result = await createUser(enteredEmail, enteredPassword);
			} catch (error) {
				console.log(error);
			}
		}
	}

	return (
		<section className="relative flex justify-center align-center w-screen min-h-screen bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] overflow-hidden">
			<div className="color" />
			<div className="color bottom-[-150px] left-[100px] w-[500px] h-[500px] bg-[#fffd87]" />
			<div className="color bottom-[50px] right-[100px] w-[300px] h-[300px] bg-[#00d2ff]" />
			<div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
				<div
					className="square border-bottom-right-glass square-delay"
					style={{ "--i": "0" }}
				/>
				<div
					className="square border-bottom-right-glass top-[150px] left-[-100px] w-[120px] h-[120px] z-20 square-delay"
					style={{ "--i": "1" }}
				/>
				<div
					className="square border-bottom-right-glass bottom-[50px] right-[-60px] w-[80px] h-[80px] z-20 square-delay"
					style={{ "--i": "2" }}
				/>
				<div
					className="square border-bottom-right-glass bottom-[-80px] left-[100px] w-[50px] h-[50px] square-delay"
					style={{ "--i": "3" }}
				/>
				<div
					className="square border-bottom-right-glass top-[-80px] left-[140px] w-[60px] h-[60px] delay-[-7000ms] square-delay"
					style={{ "--i": "4" }}
				/>
				<div className="relative top-0 left-0 w-[400px] min-h-[400px] bg-white/10 border rounded-[10px] flex justify-center align-center backdrop-blur-[5px] shadow-glass3 border-bottom-right-glass border-white/50">
					<div className="relative w-full h-full p-[40px]">
						<h2 className="relative text-white text-[24px] font-semibold tracking-[1px] mb-[40px] before:absolute before:left-0 before:bottom-[-10px] before:w-[80px] before:h-[4px] before:bg-white">
							{isLogin ? "Login" : "Register"} Form
						</h2>
						<form onSubmit={submitHandler}>
							<div className="inputBox">
								{/* <label htmlFor='email'>Your Email</label> */}
								<input
									className="input border-bottom-right-glass"
									type="email"
									placeholder="E-Mail"
									id="email"
									required
									ref={emailInputRef}
								/>
							</div>
							<div className="inputBox">
								{/* <label htmlFor='password'>Your Password</label> */}
								<input
									className="input border-bottom-right-glass"
									type="password"
									placeholder="Password"
									id="password"
									required
									ref={passwordInputRef}
								/>
							</div>
							<div className="inputBox">
								<input
									className="input border-bottom-right-glass text-[#666] bg-white max-w-[100px] cursor-pointer mb-[20px] font-semibold"
									type="submit"
									value={isLogin ? "Login" : "Register"}
								/>
							</div>
							<p className="mt-[5px] text-white">
								Already Have An Account?{" "}
								{isLogin ? "Login " : "Register Now! "}
								<a
									className="font-semibold"
									onClick={switchAuthModeHandler}
								>
									{isLogin
										? "Create new account"
										: "Signin with existing account"}
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Authentication;
