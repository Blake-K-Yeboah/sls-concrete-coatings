import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

import styles from "../../styles/Header.module.sass";

const Header: FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <h1 className={styles.largeText}>SLS Concrete Coatings</h1>
                <p className={styles.smallerText}>
                    Specialising in Decorative Concrete Resurfacing, Spray
                    Paving, and Epoxy Seamless Floors
                </p>
                <div className={styles.btnGroup}>
                    <button className="btn primary">Who We Are</button>
                    <button
                        className="btn light-outline"
                        style={{ marginLeft: "2em" }}
                    >
                        Free Quote
                    </button>
                </div>
            </div>
            <div className={styles.imgContainer}>
                <Image
                    src="/images/Home Hexegon Images.png"
                    layout="fill"
                    className={styles.hexImg}
                />
            </div>
        </header>
    );
};

export default Header;
