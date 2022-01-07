import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "../styles/Footer.module.sass";

const Footer: FC = () => {
    const applicationsLinks = [
        "Driveways",
        "Patios",
        "Garages",
        "Sheds",
        "Shops",
        "Factories",
    ];

    const pageLinks = [
        {
            text: "home",
            href: "/",
        },
        {
            text: "our products",
            href: "/our-products",
        },
        {
            text: "gallery",
            href: "/gallery",
        },
        {
            text: "colour chart",
            href: "/colour-chart",
        },
        {
            text: "contact us",
            href: "/contact-us",
        },
        {
            text: "sitemap",
            href: "/sitemap",
        },
        {
            text: "faq",
            href: "/faq",
        },
    ];

    return (
        <footer className={styles.footer}>
            <div className={styles.upper}>
                <div className={styles.imgContainer}>
                    <Image
                        src="/images/Logo.jpg"
                        layout="fill"
                        alt="SLS Logo"
                    />
                </div>
                <div className={styles.linksListSection}>
                    <p className={styles.linkGroup}>
                        <strong className={styles.bold}>Applications:</strong>
                        <Link href="/our-products">
                            <a className={styles.combinedLink}>
                                {applicationsLinks.join(" - ") as string}
                            </a>
                        </Link>
                    </p>
                    <p className={styles.linkGroup}>
                        <strong className={styles.bold}>Pages:</strong>
                        {pageLinks.map((link, index) => {
                            let output = (
                                <Link href={link.href} key={link.href}>
                                    <a className={styles.individualLink}>
                                        {link.text}
                                    </a>
                                </Link>
                            );

                            if (index == pageLinks.length - 1) {
                                return output;
                            } else {
                                return (
                                    <span key={link.href}>
                                        {output}
                                        <span className={styles.spacer}>-</span>
                                    </span>
                                );
                            }
                        })}
                    </p>
                </div>
            </div>
            <div className={styles.lower}>
                <p className={styles.lowerText}>
                    Copyright &copy; 2020-2021 SLS Concrete Coatings
                </p>
                <p className={styles.lowerText}>
                    Website designed by
                    <Link href="https://www.blakeyeboah.com/">
                        <a className={styles.link} target="_blank">
                            Blake Yeboah
                        </a>
                    </Link>
                </p>
            </div>
        </footer>
    );
};

export default Footer;
