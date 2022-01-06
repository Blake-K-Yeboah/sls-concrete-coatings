import { FC } from "react";
import Image from "next/image";

// Styling
import styles from "../../styles/ColourChart.module.sass";

// Data
import { epoxyFloorsRanges } from "../../data";
import SprayPavingColours from "./SprayPavingColours";

const EpoxyColours: FC = () => {
    return (
        <div className={styles.epoxyColours}>
            <details>
                <summary
                    className={styles.rangeHeading}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    Creative Flake Standard Colour Range
                </summary>

                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.standard.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/Image (${floor.imgNum}).jpg`}
                                        layout="fill"
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
                    Creative Flake Stone Look Range
                </summary>

                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.stoneLook.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/Image (${floor.imgNum}).jpg`}
                                        layout="fill"
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
                    Creative Flake Designer Colour Range
                </summary>

                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.designer.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/Image (${floor.imgNum}).jpg`}
                                        layout="fill"
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
                    Ultra Epoxy Industrial Flooring Colour Range
                </summary>
                <SprayPavingColours />
            </details>
        </div>
    );
};

export default EpoxyColours;
