import type { NextPage } from "next";
import Head from "next/head";

// Page Components
import Header from "../components/Home/Header";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Home</title>
                <meta charSet="utf-8" />
            </Head>
            <Header />
        </>
    );
};

export default Home;
