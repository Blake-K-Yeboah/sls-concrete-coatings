// Stylesheet
import "../styles/globals.sass";

// Types
import type { AppProps } from "next/app";

// Components
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
