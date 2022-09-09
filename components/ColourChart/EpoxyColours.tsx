import { FC } from "react";
import Image from "next/image";

// Styling
import styles from "../../styles/ColourChart.module.sass";

// Data
import { epoxyFloorsRanges } from "../../data";

const EpoxyColours: FC = () => {
    return (
        <div className={styles.epoxyColours}>
            <details>
                <summary
                    className={styles.rangeHeading}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    Epoxy Flooring - Flake Samples
                </summary>

                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.one.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/new/1/Image (${floor.imgNum}).jpg`}
                                        layout="fill"
                                        alt="Epoxy Floor"
                                    />
                                </div>
                                <p className={styles.floorBoxTitle}>
                                    {floor.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary
                    className={styles.rangeHeading}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    Metallic Epoxy - Base Coat &amp; Pigment Samples
                </summary>

                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.three.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/new/3/Image (${floor.imgNum}).jpg`}
                                        layout="fill"
                                        alt="Epoxy Floor"
                                    />
                                </div>
                                <p className={styles.floorBoxTitle}>
                                    {floor.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </details>
            <details>
                <summary
                    className={styles.rangeHeading}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    Epoxy - Base Coat Samples
                </summary>
                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.four.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/new/4/Image (${floor.imgNum}).jpg`}
                                        layout="fill"
                                        alt="Epoxy Floor"
                                    />
                                </div>
                                <p className={styles.floorBoxTitle}>
                                    {floor.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </details>
        </div>
    );
};

export default EpoxyColours;
