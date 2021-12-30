import { FC } from "react";

// Styles
import styles from "../../styles/OurProducts.module.sass";

// Components
import Title from "../Common/Title";

// Data
import { applications } from "../../data";

// Icons
import { AiFillStar } from "react-icons/ai";

const CommonApplications: FC = () => {
    return (
        <div className={styles.commonApplications}>
            <Title type="center" text="Common Applications" />
            <div className={styles.applicationList}>
                {applications.map((application) => (
                    <div className={styles.application} key={application}>
                        <span>{application as string}</span>
                    </div>
                ))}
            </div>
            <div className={styles.guaranteeSection}>
                <h4 className={styles.guaranteeHeading}>
                    <AiFillStar className={styles.star} />
                    “5 Year Written Guarantee”
                    <AiFillStar className={styles.star} />
                </h4>
                <p className={styles.guaranteeParagraph}>
                    Our family owned and operated business delivers a high
                    standard of quality and service to each and every customer
                    so please Contact Us for a free quote and let us show you
                    how to add comfort and value to your home.
                </p>
                <small className={styles.guaranteeSmallText}>
                    *We use and recommend products supplied by Colour Spray.
                    Work up to $3,300.
                </small>
            </div>
        </div>
    );
};

export default CommonApplications;
