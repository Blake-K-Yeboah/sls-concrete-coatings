import Image from "next/image";
import { useRouter } from "next/router";
import { FC } from "react";

import styles from "../../styles/Header.module.sass";

const Header: FC = () => {
    const router = useRouter();

    return (
        <header className={styles.header}>
            <div className={styles.content}>
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
                                top: screen.height,
                                left: 0,
                                behavior: "smooth",
                            });
                        }}
                    >
                        Who We Are
                    </button>
                    <button
                        className="btn light-outline"
                        style={{ marginLeft: "2em" }}
                        onClick={() => router.push("/contact-us")}
                    >
                        Free Quote
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image src="/images/Home Hexegon Images.png" layout="fill" />
            </div>
        </header>
    );
};

export default Header;
