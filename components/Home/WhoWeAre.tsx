import { FC } from "react";

import Title from "../Common/Title";

import styles from "../../styles/WhoWeAre.module.sass";
import Image from "next/image";

const WhoWeAre: FC = () => {
    return (
        <section
            className={styles.whoWeAreSection}
            id="whoWeAre"
            data-aos-duration="1250"
            data-aos="fade-right"
        >
            <Title type="left" text="Who We Are" />

            <div className={styles.sectionGrid}>
                <div className={styles.content}>
                    <p className={styles.paragraph}>
                        SLS Concrete Coatings specialises in the application of
                        Decorative Seamless Flooring and Spray Paving products.
                        Our range of products are specially formulated coating
                        systems that adhere permanently to the prepared surface.
                        Please visit the About Our Products page to learn more.
                        <br />
                        <br />
                        SLS Concrete Coatings is a family owned and operated
                        business that is located on Brisbane&apos;s Southside in
                        Queensland, also servicing the surrounding areas. We
                        deliver a high standard of quality and service to each
                        and every customer.
                    </p>
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        src="/images/Logo (Updated).png"
                        layout="fill"
                        alt="SLS Logo"
                    />
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
