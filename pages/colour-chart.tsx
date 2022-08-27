import type { NextPage } from "next";
import Head from "next/head";
import React, { useState, useEffect } from "react";

// Page Components
import Title from "../components/Common/Title";
import SprayPavingColours from "../components/ColourChart/SprayPavingColours";
import EpoxyColours from "../components/ColourChart/EpoxyColours";

// Styling
import styles from "../styles/ColourChart.module.sass";

// GSAP
import gsap from "gsap";

const ColourChart: NextPage = () => {
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

    const [galleryType, setGalleryType] = useState<string>("epoxy-floors");

    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setGalleryType(e.target.value);

    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Colour Chart</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.mainContent}>
                <div id="titleContainer">
                    <Title type="left" text="Colour Chart" />
                </div>
                <p className={styles.selectionText} id="selectionText">
                    See Colours For
                    <select
                        value={galleryType}
                        onChange={selectChangeHandler}
                        className={styles.selectMenu}
                    >
                        <option value="spray-paving">Spray Paving</option>
                        <option value="epoxy-floors">Epoxy Floors</option>
                    </select>
                </p>
                {galleryType === "spray-paving" ? (
                    <>
                        <SprayPavingColours />
                        <p
                            className={styles.smallText}
                            data-aos="zoom-out-down"
                            data-aos-duration="1000"
                        >
                            Liquid Oxide Additive is a colouring agent for
                            cement products. Versatility is the key success to
                            this quality product. With 30 different colours
                            available, this predispersed liquid can be used for
                            many colouring applications such as colouring tile
                            grout, pool pebble, render, ornaments, etc.
                        </p>
                    </>
                ) : (
                    <>
                        <EpoxyColours />
                    </>
                )}
            </main>
        </>
    );
};

export default ColourChart;
