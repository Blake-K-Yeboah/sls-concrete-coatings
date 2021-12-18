import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

// Styles
import styles from "../styles/Navbar.module.sass";

const Navbar: FC = () => {
    const router: NextRouter = useRouter();

    const links = [
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
    ];

    return (
        <nav className={styles.navbar}>
            <Link href="/">
                <a className={styles.brand}>
                    <Image
                        src="/images/Smaller Logo.jpg"
                        alt="Logo"
                        width={75}
                        height={75}
                    />
                    <h2>SLS Concrete Coatings</h2>
                </a>
            </Link>
            <ul className={styles.linkList}>
                {links.map((link) => (
                    <li key={link.href}>
                        <Link href={link.href}>
                            <a
                                className={`${styles.link} ${
                                    link.href !== "/"
                                        ? styles.linkWithMargin
                                        : ""
                                } ${
                                    router.asPath == link.href
                                        ? styles.activeLink
                                        : ""
                                }`}
                            >
                                {link.text as string}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
