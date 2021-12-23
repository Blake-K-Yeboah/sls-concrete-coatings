import type { NextPage } from "next";
import Head from "next/head";

// Page Components
import LeftSide from "../../components/OurProducts/LeftSide";
import RightSide from "../../components/OurProducts/RightSide";

// Styling
import styles from "../../styles/OurProducts.module.sass";

const OurProducts: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Our Products</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.grid}>
                <LeftSide />
                <RightSide />
            </main>
        </>
    );
};

export default OurProducts;
