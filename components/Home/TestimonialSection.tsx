import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "../../styles/TestimonialSection.module.sass";

const TestimonialSection: FC = () => {
    return (
        <section className={styles.testimonialSection}>
            <Link href="/gallery">
                <a className={styles.imgContainer}>
                    <Image
                        src="/images/See All Hexgonal Images.png"
                        layout="fill"
                    />
                </a>
            </Link>
            <div className={styles.contentContainer}>
                <div className={styles.content}>
                    <p className={styles.text}>"Family Owned And Operated"</p>
                    <p className={styles.text}>
                        "Excellence In Customer Service"
                    </p>
                    <div className={styles.starList}>
                        {Array.from(Array(5).keys()).map((i) => (
                            <AiFillStar key={i} className={styles.star} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
