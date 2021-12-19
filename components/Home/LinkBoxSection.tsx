import { FC } from "react";

import LinkBox from "./LinkBox";

import styles from "../../styles/LinkBoxes.module.sass";

const LinkBoxSection: FC = () => {
    const linkBoxes = [
        {
            text: "Get A Free Quote",
            href: "/contact-us",
            imgId: "1",
        },
        {
            text: "About Our Products",
            href: "/our-products",
            imgId: "2",
        },
        {
            text: "View Photo Gallery",
            href: "/gallery",
            imgId: "3",
        },
    ];

    return (
        <section className={styles.linkBoxGrid}>
            {linkBoxes.map((link) => (
                <LinkBox link={link} key={link.imgId} />
            ))}
        </section>
    );
};

export default LinkBoxSection;
