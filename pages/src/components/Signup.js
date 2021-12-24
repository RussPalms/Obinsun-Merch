import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

function Signup() {
	const router = useRouter();

	const emailRef = useRef(null);
	const passwordRef = useRef(null);

	const onFormSubmit = async (e) => {
		e.preventDefault();
		//Getting value from useRef()
		const email = emailRef.current.value;
		const password = passwordRef.current.value;
		//Validation
		if (!email || !email.includes("@") || !password) {
			alert("Invalid details");
			return;
		}
		//POST form values
		const res = await fetch("../../api/auth/signup", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
			}),
		});
		//Await for data for any desirable next steps
		const data = await res.json();
		router.push("/");
		console.log(data);
	};

	return (
		// <body className="overflow-hidden">
		<section className="relative flex justify-center align-center w-screen min-h-screen bg-gradient-to-b from-[#f1f4f9] to-[#dff1ff] overflow-hidden">
			<div className="color" />
			<div className="color bottom-[-150px] left-[100px] w-[500px] h-[500px] bg-[#fffd87]" />
			<div className="color bottom-[50px] right-[100px] w-[300px] h-[300px] bg-[#00d2ff]" />
			<div className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]">
				<div
					className="square border-bottom-right-glass square-delay"
					style={
						// 	({ "animation-delay": "calc(-1s * var(--i)" },
						{ "--i": "0" }
						// )
					}
				/>
				<div
					className="square border-bottom-right-glass top-[150px] left-[-100px] w-[120px] h-[120px] z-20 square-delay"
					style={
						// 	({ "animation-delay": "calc(-1s * var(--i))" },
						{ "--i": "1" }
						// )
					}
				/>
				<div
					className="square border-bottom-right-glass bottom-[50px] right-[-60px] w-[80px] h-[80px] z-20 square-delay"
					style={
						// 	({ "animation-delay": "calc(-1s * var(--i))" },
						{ "--i": "2" }
						// )
					}
				/>
				<div
					className="square border-bottom-right-glass bottom-[-80px] left-[100px] w-[50px] h-[50px] square-delay"
					style={
						// 	({ "animation-delay": "calc(-1s * var(--i))" },
						{ "--i": "3" }
						// )
					}
				/>
				<div
					className="square border-bottom-right-glass top-[-80px] left-[140px] w-[60px] h-[60px] delay-[-7000ms] square-delay"
					style={
						// 	({ "animation-delay": "calc(-1s * var(--i))" },
						{ "--i": "4" }
						// )
					}
				/>
				<div className="relative top-0 left-0 w-[400px] min-h-[400px] bg-white/10 border rounded-[10px] flex justify-center align-center backdrop-blur-[5px] shadow-glass3 border-bottom-right-glass border-white/50">
					<div className="relative w-full h-full p-[40px]">
						<h2 className="relative text-white text-[24px] font-semibold tracking-[1px] mb-[40px] before:absolute before:left-0 before:bottom-[-10px] before:w-[80px] before:h-[4px] before:bg-white">
							Login Form
						</h2>
						<form>
							<div className="inputBox">
								<input
									className="input border-bottom-right-glass"
									type="email"
									placeholder="E-Mail"
									value={emailRef}
								/>
							</div>
							<div className="inputBox">
								<input
									className="input border-bottom-right-glass"
									type="password"
									placeholder="Password"
									value={passwordRef}
								/>
							</div>
							<div className="inputBox">
								<input
									className="input border-bottom-right-glass text-[#666] bg-white max-w-[100px] cursor-pointer mb-[20px] font-semibold"
									type="submit"
									value="Login"
									onClick={onFormSubmit}
								/>
							</div>
							<p className="mt-[5px] text-white">
								Forgot Password?{" "}
								<a className="font-semibold" href="#">
									Click Here
								</a>
							</p>
							<p className="mt-[5px] text-white">
								Don't Have An Account?{" "}
								<a className="font-semibold" href="#">
									Sign Up!
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
		// </body>
	);
}

export default Signup;
