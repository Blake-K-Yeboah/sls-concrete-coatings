import { FC } from "react";

import styles from "../../styles/OurProducts.module.sass";

const AboutTheProduct: FC = () => {
    return (
        <div className={styles.aboutTheProduct}>
            <h1 data-aos="zoom-in" data-aos-duration="1000">
                About the product
            </h1>
        </div>
    );
};

export default AboutTheProduct;
