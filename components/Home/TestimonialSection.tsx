import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { AiFillStar } from "react-icons/ai";
import styles from "../../styles/TestimonialSection.module.sass";

const TestimonialSection: FC = () => {
    return (
        <section className={styles.testimonialSection}>
            <Link href="/gallery">
                <a
                    className={styles.imgContainer}
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    data-aos-offset="100"
                >
                    <Image
                        src="/images/See All Hexgonal Images.png"
                        layout="fill"
                        alt=""
                    />
                </a>
            </Link>
            <div
                className={styles.contentContainer}
                data-aos="fade-left"
                data-aos-duration="1000"
                data-aos-offset="100"
            >
                <div className={styles.content}>
                    <p className={styles.text}>
                        &#34;Family Owned And Operated&#34;
                    </p>
                    <p className={styles.text}>
                        &#34;Excellence In Customer Service&#34;
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
