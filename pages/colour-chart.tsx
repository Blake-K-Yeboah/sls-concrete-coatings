import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";

// Page Components
import Title from "../components/Common/Title";
import SprayPavingColours from "../components/ColourChart/SprayPavingColours";
import EpoxyColours from "../components/ColourChart/EpoxyColours";

// Styling
import styles from "../styles/ColourChart.module.sass";

const ColourChart: NextPage = () => {
    const [galleryType, setGalleryType] = useState<string>("spray-paving");

    const selectChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) =>
        setGalleryType(e.target.value);

    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Colour Chart</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.mainContent}>
                <Title type="left" text="Colour Chart" />
                <p className={styles.selectionText}>
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
                        <p className={styles.smallText}>
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
                        <p className={styles.smallText}>
                            *While all possible care has been taken to reproduce
                            these colours, South Brisbane Concrete Resurfacing
                            cannot be held responsible for colour variations of
                            the finished product.
                        </p>
                    </>
                )}
            </main>
        </>
    );
};

export default ColourChart;
