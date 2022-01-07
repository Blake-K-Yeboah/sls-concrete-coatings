import { useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

// Page Components
import Title from "../../components/Common/Title";
import AboutTheProduct from "../../components/OurProducts/AboutTheProduct";
import CenteredTextSection from "../../components/OurProducts/CenteredTextSection";
import CommonApplications from "../../components/OurProducts/CommonApplications";

// Styling
import styles from "../../styles/SprayPaving.module.sass";

// GSAP
import gsap from "gsap";

const SprayPaving: NextPage = () => {
    useEffect(() => {
        gsap.from("#sprayPavingHeaderContent", {
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
                <title>SLS Concrete Coatings - Spray Paving</title>
                <meta charSet="utf-8" />
            </Head>
            <section className={styles.grid}>
                <div className={styles.content} id="sprayPavingHeaderContent">
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
                    <div className={styles.imgContainer} id="hexagonImg">
                        <Image
                            src="/images/Home Hexegon Images.png"
                            layout="fill"
                            alt="Spray Paving Examples"
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
            <div
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                data-aos-offset="200"
                className={styles.largeTitle}
            >
                <Title type="center" text="Spray Pave Application" />
            </div>
            <div
                className={styles.applicationImgContainer}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
                <Image
                    src="/images/Application Process.png"
                    layout="fill"
                    alt="Application Process Diagram"
                />
            </div>
            <ul
                className={styles.applicationSteps}
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
                <li>
                    <span className={styles.stepNum}>1. </span> The concrete
                    area is acid etched using a mixture of hydrochloric acid and
                    water and spreading it around with a stiff broom. This
                    process cleans and opens the pores of the concrete in
                    readiness for the application.
                </li>
                <li>
                    <span className={styles.stepNum}>2. </span> The concrete is
                    then high pressure washed to remove any residues and
                    degregated concrete.
                </li>
                <li>
                    <span className={styles.stepNum}>3. </span> When applying
                    Spray Pave against any existing structures, we mask up using
                    plastic provided to prevent splattering and spillages.
                </li>
                <li>
                    <span className={styles.stepNum}>4. </span> A coat of primer
                    is rolled on to the entire surface.
                </li>
                <li>
                    <span className={styles.stepNum}>5. </span> We then spray or
                    trowel a colour base coat on to the surface. This colour
                    will represent the grout line.
                </li>
                <li>
                    <span className={styles.stepNum}>6. </span> If supplying a
                    decorative finish we either fix appropriate stencil or
                    filament tape to achieve the desired finish.
                </li>
                <li>
                    <span className={styles.stepNum}>7. </span> Apply 2 top
                    coats using hopper gun and compressor.
                </li>
                <li>
                    <span className={styles.stepNum}>8. </span>
                    When dry we remove stencil or filament tape, airblow clean
                    and apply 2 coats of sealant for protection from UV rays and
                    other stains.
                </li>
            </ul>
            <div
                className={styles.btnGroup}
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
            <CommonApplications />
        </>
    );
};

export default SprayPaving;
