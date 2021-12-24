import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Page Components
import Title from "../../components/Common/Title";
import AboutTheProduct from "../../components/OurProducts/AboutTheProduct";

// Styling
import styles from "../../styles/SprayPaving.module.sass";

const SprayPaving: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Spray Paving</title>
                <meta charSet="utf-8" />
            </Head>
            <section className={styles.grid}>
                <div className={styles.content}>
                    <Title type="left" text="Spray Paving" />
                    <p className={styles.text}>
                        The spray paving industry was introduced in Australia
                        approximately 20 years ago and continues to grow at a
                        staggering rate. The technology and application
                        techniques have improved significantly over this period
                        of time.
                        <br />
                        <br />
                        Our product is a specially formulated coating system
                        that adheres permanently to concrete giving the
                        appearance of a newly laid decorative driveway, patio,
                        pool surround or garage. Spray paving as it is commonly
                        known, has a wide range of applications in both the
                        domestic and commercial sectors.
                    </p>
                </div>
                <div className={styles.imgGridContainer}>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/images/Home Hexegon Images.png"
                            layout="fill"
                        />
                    </div>
                </div>
            </section>
            <AboutTheProduct />
        </>
    );
};

export default SprayPaving;
