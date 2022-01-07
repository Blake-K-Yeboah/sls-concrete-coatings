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
            <div
                data-aos="zoom-out-down"
                data-aos-duration="1000"
                data-aos-offset="200"
                className={styles.largeTitle}
            >
                <Title type="center" text="Common Applications" />
            </div>
            <div className={styles.applicationList}>
                {applications.map((application) => (
                    <div
                        className={styles.application}
                        key={application}
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                        data-aos-offset="200"
                    >
                        <span>{application as string}</span>
                    </div>
                ))}
            </div>
            <div
                className={styles.guaranteeSection}
                data-aos="flip-up"
                data-aos-duration="1000"
                data-aos-offset="200"
            >
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
            </div>
        </div>
    );
};

export default CommonApplications;
