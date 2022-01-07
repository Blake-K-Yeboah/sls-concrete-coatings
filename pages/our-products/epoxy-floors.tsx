import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { NextPage } from "next";

// Page Components
import Title from "../../components/Common/Title";
import AboutTheProduct from "../../components/OurProducts/AboutTheProduct";
import CenteredTextSection from "../../components/OurProducts/CenteredTextSection";

// Styling
import styles from "../../styles/SprayPaving.module.sass";

// GSAP
import gsap from "gsap";

const EpoxyFloors: NextPage = () => {
    useEffect(() => {
        gsap.from("#epoxyFloorsHeaderContent", {
            opacity: 0,
            x: -50,
            duration: 1.25,
        });
        gsap.from("#hexagonImg", {
            opacity: 0,
            x: 50,
            duration: 1.25,
        });
    }, []);

    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Epoxy Floors</title>
                <meta charSet="utf-8" />
            </Head>
            <section className={styles.grid}>
                <div className={styles.content} id="epoxyFloorsHeaderContent">
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
                    <div className={styles.imgContainer} id="hexagonImg">
                        <Image
                            src="/images/Epoxy Flooring Hexagon Images.png"
                            layout="fill"
                            alt="Epoxy Floors examples"
                        />
                    </div>
                </div>
            </section>
            <AboutTheProduct />
            <CenteredTextSection
                title="more information"
                text="Creative Flake Flooring consists of a primer that acts as a binding ingredient between the the concrete and epoxy. Then, an epoxy base coat that adheres permanently to the prepared surface is applied. Whilst the base coat is still wet, an acrylic multi-coloured chip is broadcasted over the entire surface and left to dry. The surface is then lightly sanded, vacuumed and then two coats of clear 2 polyurethane is then applied to seal the acrylic chips and provide a gloss non-slip surface which will look amazing for years to come."
            />
            <CenteredTextSection
                title="additionally"
                text="We are also able to tint the base coat in one of 30 stunning colours to produce various finishes. Creative Flake flooring is a modern alternative to tiles and in additon a non-slip additive can be applied in situations where required such as ramps and wet areas."
            />
            <div
                className={styles.lessMarginBtnGroup}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
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

export default EpoxyFloors;
