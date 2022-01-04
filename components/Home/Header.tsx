import Image from "next/image";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";

import styles from "../../styles/Header.module.sass";

import gsap from "gsap";

const Header: FC = () => {
    useEffect(() => {
        gsap.from("#content", { opacity: 0, x: -100, duration: 1.5 });
        gsap.from("#header-img", { opacity: 0, x: 100, duration: 1.5 });
    }, []);

    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.content} id="content">
                <h1 className={styles.largeText}>SLS Concrete Coatings</h1>
                <p className={styles.smallerText}>
                    Specialising in Decorative Concrete Resurfacing, Spray
                    Paving, and Epoxy Seamless Floors
                </p>
                <div className={styles.btnGroup}>
                    <button
                        className="btn primary"
                        onClick={() => {
                            window.scroll({
                                top: screen.height - 0.15 * screen.height,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Who We Are
                    </button>
                    <button
                        className={`btn light-outline ${styles.secondBtn}`}
                        onClick={() => router.push("/contact-us")}
                    >
                        Free Quote
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer} id="header-img">
                <Image src="/images/Home Hexegon Images.png" layout="fill" />
            </div>
        </header>
    );
};

export default Header;
