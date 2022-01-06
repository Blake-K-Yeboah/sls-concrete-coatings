import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react";

// Page Components
import Title from "../components/Common/Title";
import ImageGrid from "../components/Gallery/ImageGrid";

// Styling
import styles from "../styles/Gallery.module.sass";

// GSAP
import gsap from "gsap";

const Gallery: NextPage = () => {
    useEffect(() => {
        gsap.from("#titleContainer", {
            opacity: 0,
            x: -50,
            y: -50,
            duration: 1,
        });
        gsap.from("#selectionText", {
            opacity: 0,
            x: -30,
            y: -30,
            duration: 1,
        });
    }, []);

    const [galleryType, setGalleryType] = useState<string>("spray-paving");

    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setGalleryType(e.target.value);

    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Photo Gallery</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.mainContent}>
                <div id="titleContainer">
                    <Title type="left" text="Photo Gallery" />
                </div>
                <p className={styles.selectionText} id="selectionText">
                    What Do You Want To See?
                    <select
                        value={galleryType}
                        onChange={selectChangeHandler}
                        className={styles.selectMenu}
                    >
                        <option value="spray-paving">Spray Paving</option>
                        <option value="epoxy-floors">Epoxy Floors</option>
                    </select>
                </p>
                <ImageGrid galleryType={galleryType} />
                <p
                    className={styles.smallText}
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                >
                    {galleryType === "spray-paving"
                        ? "*CCI products were used to create these stunning finishes."
                        : "*Images on this site depict completed epoxy flooring projects. Some images may show alternate products."}
                </p>
                <div
                    className={styles.btnContainer}
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                >
                    <Link href="/colour-chart">
                        <a className="btn primary">View Colour Chart</a>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Gallery;
