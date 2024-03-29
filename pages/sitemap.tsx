import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

// Page Components
import Title from "../components/Common/Title";

// Styling
import styles from "../styles/Sitemap.module.sass";

const Sitemap: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Sitemap</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.mainContent}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <Title type="left" text="sitemap" />
                </div>
                <div className={styles.grid}>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/">
                            <a className={styles.linkContainer}>Home</a>
                        </Link>
                    </div>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/our-products">
                            <a className={styles.linkContainer}>Our Products</a>
                        </Link>

                        <Link href="/our-products/spray-paving">
                            <a className={styles.subLinkContainer}>
                                Spray Paving
                            </a>
                        </Link>

                        <Link href="/our-products/epoxy-floors">
                            <a className={styles.subLinkContainer}>
                                Epoxy Floors
                            </a>
                        </Link>
                    </div>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/gallery">
                            <a className={styles.linkContainer}>Gallery</a>
                        </Link>
                    </div>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/colour-chart">
                            <a className={styles.linkContainer}>Colour Chart</a>
                        </Link>
                    </div>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/contact-us">
                            <a className={styles.linkContainer}>Contact Us</a>
                        </Link>
                    </div>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/sitemap">
                            <a className={styles.linkContainer}>Sitemap</a>
                        </Link>
                    </div>
                    <div
                        className={styles.column}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <Link href="/faq">
                            <a className={styles.linkContainer}>FAQ</a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Sitemap;
