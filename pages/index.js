import Head from "next/head";
import Designs from "./src/components/Designs";
import Design from "./src/components/Design";
import Entity from "./src/components/EntityCreation/Entity";
import Entities from "./src/components/EntityCreation/Entities";

export default function Home() {
	return (
		<>
			<Head>
				<title>Obinsun</title>
				<link rel="icon" href="/Grim2021.svg" />
			</Head>

			<main>
				{/* <Designs /> */}
				{/* <Design /> */}
				<Entity />
				{/* <Entities /> */}
			</main>
		</>
	);
}
