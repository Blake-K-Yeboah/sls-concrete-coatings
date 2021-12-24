import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

// Page Components
import Title from "../../components/Common/Title";
import AboutTheProduct from "../../components/OurProducts/AboutTheProduct";
import CenteredTextSection from "../../components/OurProducts/CenteredTextSection";

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
            <CenteredTextSection
                title="will not peel or bubble"
                text="Solvent based paving paints trap moisture in the concrete. The trapped moisture can cause the paint to bubble and lift off. Our product will not lift off, as it is not paint. Spray pave products are a decorative resurfacing material for renovating old or new concrete surfaces — being a single pack polymer modified cementaceous coating system designed to give excellent protective durability, while decorating existing concrete in a vast range of styles, textures, colours and patterns."
            />
            <CenteredTextSection
                title="slip resistant"
                text="Spray pave products are much safer to walk on in wet conditions than paving paint and other similar products as the product has an inbuilt textured finish for a more positive grip."
            />
            <CenteredTextSection
                title="easy to clean"
                text="The spray pave coating system is protected by the application of a clear sealer, which is petrol and solvent resistant. Oil and stains simply wash away leaving your concrete looking like new. It is recommended to re-seal the decorative concrete once a year to enhance and refresh the overall finish."
            />
            <Title type="center" text="Spray Pave Application" />
            <div className={styles.applicationImgContainer}>
                <Image src="/images/Application Process.png" layout="fill" />
            </div>
        </>
    );
};

export default SprayPaving;
