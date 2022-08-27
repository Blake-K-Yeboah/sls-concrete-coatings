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
                    COLOUR FLAKE™ Epoxy Flake Flooring
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
                    DURASTONE™ 1.0 & 2.0 Epoxy Flake Flooring
                </summary>

                <div className={styles.imgRange}>
                    {epoxyFloorsRanges.two.map((floor) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                            >
                                <div className={styles.floorBoxImgContainer}>
                                    <Image
                                        src={`/images/colours/epoxy-floors/new/2/Image (${floor.imgNum}).jpg`}
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
                    Metallic Art Epoxy EP100® 100% Solid Epoxy
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
                    EPOXY EP200™ 100% Solids - Epoxy Flooring
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
