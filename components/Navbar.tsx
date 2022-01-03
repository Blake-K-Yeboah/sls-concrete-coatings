import { FC, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NextRouter, useRouter } from "next/router";

// Styles
import styles from "../styles/Navbar.module.sass";

// Icons
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosClose } from "react-icons/io";

// GSAP
import gsap from "gsap";

const Navbar: FC = () => {
    const router: NextRouter = useRouter();

    const [mobileMenuShow, setMobileMenuShow] = useState(false);

    const toggleMobileMenu = () => {
        const mobileNav = document.querySelector("#mobile-nav") as HTMLElement;

        if (mobileMenuShow) {
            mobileNav.style.display = "none";
        } else {
            mobileNav.style.display = "flex";
            gsap.from("#mobile-nav", { opacity: 0, duration: 1.5 });
            gsap.from("#mobile-nav ul li", {
                x: 50,
                duration: 1,
                opacity: 0,
                stagger: 0.25,
            });
        }

        setMobileMenuShow(!mobileMenuShow);
    };

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
        <>
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
                <AiOutlineMenu
                    className={styles.menuIcon}
                    onClick={toggleMobileMenu}
                />
            </nav>
            <div className={styles.mobileNav} id="mobile-nav">
                <IoIosClose
                    className={styles.closeIcon}
                    onClick={toggleMobileMenu}
                />
                <ul>
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href}>
                                <a
                                    className={
                                        router.asPath == link.href
                                            ? styles.activeLink
                                            : ""
                                    }
                                >
                                    {link.text as string}
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
