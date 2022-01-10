import "../styles/globals.css";
// import { Provider } from "react-redux";
// import { store } from "./state/store";
import { SessionProvider } from "next-auth/react";
import { UserProvider } from "./src/app/features";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider session={session}>
			<UserProvider>
				<Component {...pageProps} />
			</UserProvider>
		</SessionProvider>
	);
}

export default MyApp;
