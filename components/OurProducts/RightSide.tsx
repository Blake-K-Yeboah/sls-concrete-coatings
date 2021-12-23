import Link from "next/link";
import { FC } from "react";

import styles from "../../styles/OurProducts.module.sass";

import Title from "../Common/Title";

const RightSide: FC = () => {
    return (
        <div className={styles.rightSide}>
            <Title type="left" text="Epoxy Floors" />
            <p className={styles.paragraph}>
                Creative Flake flooring is a 2 part epoxy seamless flooring
                system with a range of stunning, colourful acrylic flakes
                incorporated into the finish.
            </p>
            <div>
                <Link href="/our-products/epoxy-floors">
                    <a className={`btn primary ${styles.firstBtn}`}>
                        Learn More
                    </a>
                </Link>
                <Link href="/gallery">
                    <a className="btn light-outline">View Photo Gallery</a>
                </Link>
            </div>
        </div>
    );
};

export default RightSide;
