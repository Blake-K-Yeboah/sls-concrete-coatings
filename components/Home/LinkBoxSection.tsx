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
            text: "Frequently Asked Questions",
            href: "/faq",
            imgId: "3",
        },
    ];

    return (
        <section
            className={styles.linkBoxGrid}
            data-aos-duration="1000"
            data-aos-offset="100"
            data-aos="fade-left"
        >
            {linkBoxes.map((link) => (
                <LinkBox link={link} key={link.imgId} />
            ))}
        </section>
    );
};

export default LinkBoxSection;
