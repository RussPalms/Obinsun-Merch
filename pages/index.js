import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Designs from "./src/components/Designs";
import Design from "./src/components/Design";
import Entity from "./src/components/EntityCreation/Entity";
import Entities from "./src/components/EntityCreation/Entities";
import Header from "./src/components/Header";
import Headers from "./src/components/Headers";
import Heading from "./src/components/Heading";
import Login from "./src/components/Login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { login, logout, selectUser } from "./features/userSlice";
// import { useEffect } from "react";

export default function Home() {
	// const [isLoading, setIsLoading] = useState(false);
	// const router = useRouter();

	// useEffect(async () => {
	// 	await getSession().then((session) => {
	// 		if (!session) {
	// 			router.replace("/");
	// 		} else {
	// 			setIsLoading(true);
	// 		}
	// 	});
	// }, [router]);

	// if (isLoading) {
	// 	return <p>Loading...</p>;
	// }

	// const { data: session } = useSession();

	// console.log("session", session);

	// const user = useSelector(selectUser);
	// const dispatch = useDispatch();

	return (
		<>
			<Head>
				<title>Obinsun</title>
				<link rel="icon" href="/Grim2021.svg" />
			</Head>

			<main>
				<Heading />
				{/* home */}
				{/* <Headers /> */}
				{/* <Header /> */}
				<Designs />
				{/* <Design /> */}
				{/* <Entity /> */}
				{/* <Entities /> */}
				{/* <Login /> */}
				{/* <Log /> */}
			</main>
		</>
	);
}

// export async function getServerSideProps(context) {
// 	const session = await getSession(context);

// 	return {
// 		props: {
// 			session,
// 		},
// 	};
// }
