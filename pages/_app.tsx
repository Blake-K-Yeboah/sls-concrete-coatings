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

// SEO
import { NextSeo } from "next-seo";

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
            <NextSeo
                title="SLS Concrete Coatings"
                titleTemplate="SLS Concrete Coatings"
                defaultTitle="SLS Concrete Coatings"
                description="SLS Concrete Coatings specialises in the application of Decorative Seamless Flooring and Spray Paving products. Our range of products are specially formulated coating systems that adhere permanently to the prepared surface. Please visit the About Our Products page to learn more."
                canonical="https://www.slsconcretecoatings.com.au/"
                openGraph={{
                    url: "https://www.slsconcretecoatings.com.au/",
                    title: "SLS Concrete Coatings",
                    description:
                        "SLS Concrete Coatings specialises in the application of Decorative Seamless Flooring and Spray Paving products. Our range of products are specially formulated coating systems that adhere permanently to the prepared surface. Please visit the About Our Products page to learn more.",
                    images: [
                        {
                            url: "/og-image.jpg",
                            width: 960,
                            height: 540,
                            alt: "SLS Concrete Coatings",
                        },
                    ],
                }}
            />
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
