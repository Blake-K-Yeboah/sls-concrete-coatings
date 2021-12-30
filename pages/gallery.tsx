import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

// Page Components
import Title from "../components/Common/Title";
import ImageGrid from "../components/Gallery/ImageGrid";

// Styling
import styles from "../styles/Gallery.module.sass";

const Gallery: NextPage = () => {
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
                <Title type="left" text="Photo Gallery" />
                <p className={styles.selectionText}>
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
                <p className={styles.smallText}>
                    {galleryType === "spray-paving"
                        ? "*CCI products were used to create these stunning finishes."
                        : "*Images on this site depict completed epoxy flooring projects. Some images may show alternate products."}
                </p>
                <div className={styles.btnContainer}>
                    <Link href="/colour-chart">
                        <a className="btn primary">View Colour Chart</a>
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Gallery;
