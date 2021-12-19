import { FC } from "react";

import Link from "next/link";

import styles from "../../styles/LinkBoxes.module.sass";

// Icon
import { FiArrowUpRight } from "react-icons/fi";

interface IProps {
    link: {
        text: string;
        href: string;
        imgId: string;
    };
}

const LinkBox: FC<IProps> = ({ link }) => {
    return (
        <Link href={link.href}>
            <a className={`${styles.linkBox} ${styles[`id-${link.imgId}`]}`}>
                <div className={styles.iconCircle}>
                    <FiArrowUpRight className={styles.icon} />
                </div>
                <span className={styles.text}>{link.text as string}</span>
            </a>
        </Link>
    );
};

export default LinkBox;
