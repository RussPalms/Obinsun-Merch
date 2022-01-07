import { getSession } from "next-auth/react";
// import Dashboard from "./src/components/Dashboard";
import UserProfile from "./src/components/Profile/UserProfile";

function dashboard() {
	return <UserProfile />;
}
export async function getServerSideProps(context) {
	const session = await getSession({ req: context.req });

	if (!session) {
		return {
			redirect: {
				destination: "/authenticate",
				permanent: false,
			},
		};
	}

	return {
		props: { session },
	};
}

export default dashboard;
