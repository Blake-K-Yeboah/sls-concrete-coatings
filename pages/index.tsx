import type { NextPage } from "next";
import Head from "next/head";

// Page Components
import Header from "../components/Home/Header";
import LinkBoxSection from "../components/Home/LinkBoxSection";
import SprayPavingOverview from "../components/Home/SprayPavingOverview";
import TestimonialSection from "../components/Home/TestimonialSection";
import WhoWeAre from "../components/Home/WhoWeAre";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Home</title>
                <meta charSet="utf-8" />
            </Head>
            <Header />
            <WhoWeAre />
            <LinkBoxSection />
            <SprayPavingOverview />
            <TestimonialSection />
        </>
    );
};

export default Home;
