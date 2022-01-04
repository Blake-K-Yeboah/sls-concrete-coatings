// Stylesheet
import "../styles/globals.sass";

// Types
import type { AppProps } from "next/app";

// Components
import Layout from "../components/Layout";

// useEffect Hook
import { useEffect } from "react";

// Animate On Scroll
import AOS from "aos";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }: AppProps) {
    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            once: true,
            offset: 50,
        });
    }, []);

    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
