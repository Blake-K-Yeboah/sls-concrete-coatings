import { FC } from "react";
import Title from "../Common/Title";
import styles from "../../styles/SprayPavingOverview.module.sass";
import Image from "next/image";
import { useRouter } from "next/router";

const SprayPavingOverview: FC = () => {
    const router = useRouter();

    const btnClickHandler = () => {
        router.push("/our-products/spray-paving");
    };

    return (
        <section>
            <Title type="center" text="Spray Paving" />
            <p className={styles.paragraph}>
                Our product is a specially formulated coating system that
                adheres permanently to concrete giving the appearance of a newly
                laid decorative driveway, patio, pool surround or garage. Spray
                paving as it is commonly known, has a wide range of applications
                in both the domestic and commercial sectors.
            </p>
            <div className={styles.imgContainer}>
                <Image src="/images/Application Process.png" layout="fill" />
            </div>
            <button
                className={`btn primary ${styles.learnMoreBtn}`}
                onClick={btnClickHandler}
            >
                Learn More
            </button>
        </section>
    );
};

export default SprayPavingOverview;
