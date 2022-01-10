import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Designs from "./src/components/Designs";
import Design from "./src/components/Design";
import Entity from "./src/components/EntityCreation/Entity";
import Entities from "./src/components/EntityCreation/Entities";
import Header from "./src/components/Header";
import Headers from "./src/components/Headers";
import Heading from "./src/components/Heading";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
	const { data: session, status } = useSession();
	console.log(session);

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
