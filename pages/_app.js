import "../styles/globals.css";
// import { Provider } from "react-redux";
// import { store } from "./state/store";
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
	return (
		<SessionProvider
			session={session}
			// refetchInterval={5 * 60}
		>
			<Component {...pageProps} />
		</SessionProvider>
	);
}

export default MyApp;
