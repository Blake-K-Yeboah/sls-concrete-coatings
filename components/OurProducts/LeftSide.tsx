import Link from "next/link";
import { FC } from "react";

import styles from "../../styles/OurProducts.module.sass";

import Title from "../Common/Title";

const LeftSide: FC = () => {
    return (
        <div className={styles.leftSide}>
            <Title type="left" text="Spray Paving" />
            <p className={styles.paragraph}>
                Our product is a specially formulated coating system that
                adheres permanently to concrete giving the appearance of a newly
                laid decorative driveway, patio, pool surround or garage.
            </p>
            <div>
                <Link href="/our-products/spray-paving">
                    <a className={`btn primary ${styles.firstBtn}`}>
                        Learn More
                    </a>
                </Link>
                <Link href="/gallery">
                    <a className={`btn light-outline ${styles.secondBtn}`}>
                        View Photo Gallery
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default LeftSide;
