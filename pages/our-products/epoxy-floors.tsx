import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Page Components
import Title from "../../components/Common/Title";
import AboutTheProduct from "../../components/OurProducts/AboutTheProduct";
import CenteredTextSection from "../../components/OurProducts/CenteredTextSection";

// Styling
import styles from "../../styles/SprayPaving.module.sass";

const epoxyFloors: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Epoxy Floors</title>
                <meta charSet="utf-8" />
            </Head>
            <section className={styles.grid}>
                <div className={styles.content}>
                    <Title type="left" text="Epoxy Seamless Floors" />
                    <p className={styles.text}>
                        In 2008 our advanced range of Creative Flake products
                        was launched to cater for growing demand and popularity.
                        Creative Flake flooring is a 2 part epoxy seamless
                        flooring system with a range of stunning, colourful
                        acrylic flakes incorporated into the finish.
                        <br />
                        <br />
                        Epoxy Seamless surfaces have tremendous advantages over
                        conventional floor treatments. Cleaning and maintenance
                        of these tough surfaces are incredibly easy allowing
                        your floor to look amazing for many years to come. Epoxy
                        floors are also resistant to most spills and chemicals.
                    </p>
                </div>
                <div className={styles.imgGridContainer}>
                    <div className={styles.imgContainer}>
                        <Image
                            src="/images/Epoxy Flooring Hexagon Images.png"
                            layout="fill"
                        />
                    </div>
                </div>
            </section>
            <AboutTheProduct />
            <CenteredTextSection
                title="more information"
                text="Creative Flake Flooring consists of a water based 2 Pac epoxy base coat that adheres permanently to the prepared surface. Whilst the base coat is still wet, an acrylic multi-coloured chip is broadcast over the entire surface and left to dry. The surface is then lightly sanded, vacuumed and then two coats of a clear 2 Pac polyurethane is then applied to seal the acrylic chips and provide a gloss non-slip surface which will look amazing for years to come."
            />
            <CenteredTextSection
                title="additionally"
                text="We are also able to tint the base coat in one of 30 stunning colours to produce various finishes. Creative Flake flooring is a modern alternative to tiles and in additon a non-slip additive can be applied in situations where required such as ramps and wet areas."
            />
            <div className={styles.lessMarginBtnGroup}>
                <Link href="/colour-chart">
                    <a className="btn primary">View Colour Chart</a>
                </Link>
                <Link href="/gallery">
                    <a className="btn light-outline">View Photo Gallery</a>
                </Link>
            </div>
        </>
    );
};

export default epoxyFloors;
