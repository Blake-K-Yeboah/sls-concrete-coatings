import { FC, useState } from "react";
import Image from "next/image";

// Styling
import styles from "../../styles/ColourChart.module.sass";

// Data
import { epoxyFloorsRanges } from "../../data";

const Checkbox: FC = () => {
    return (
        <div>
            <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M26.109 8.844c0 0.391-0.156 0.781-0.438 1.062l-13.438 13.438c-0.281 0.281-0.672 0.438-1.062 0.438s-0.781-0.156-1.062-0.438l-7.781-7.781c-0.281-0.281-0.438-0.672-0.438-1.062s0.156-0.781 0.438-1.062l2.125-2.125c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l4.594 4.609 10.25-10.266c0.281-0.281 0.672-0.438 1.062-0.438s0.781 0.156 1.062 0.438l2.125 2.125c0.281 0.281 0.438 0.672 0.438 1.062z"></path>
            </svg>
        </div>
    );
};

const EpoxyColours: FC = () => {
    const [items, setItems] = useState<any>({
        one: epoxyFloorsRanges.one,
        three: epoxyFloorsRanges.three,
        four: epoxyFloorsRanges.four,
    });

    const [activeFilter, setActiveFilter] = useState<any>("");

    const filters: any = {
        standard: {
            numbers: [
                2, 6, 7, 9, 12, 13, 14, 15, 17, 18, 20, 23, 24, 25, 26, 27, 29,
                30, 32, 33, 34, 35, 36, 37, 38, 39, 40, 42, 44, 46, 49, 50, 51,
                53, 54, 56, 57, 59, 61, 62, 63, 64, 65, 66, 67, 68, 70, 72,
            ],
            key: "one",
        },
        highlight: {
            numbers: [10, 21, 59, 55, 69, 73],
            key: "one",
        },
        special: {
            numbers: [
                1, 2, 3, 4, 11, 19, 22, 12, 13, 32, 57, 67, 68, 28, 41, 43, 45,
                47, 48, 58, 74,
            ],
            key: "one",
        },
        fruit: {
            numbers: [5, 8, 16, 31, 52, 71],
            key: "one",
        },
        plain: {
            numbers: epoxyFloorsRanges.four.map((floor) => floor.imgNum),
            key: "four",
        },
    };

    const handleFilterClick = (filter: string) => {
        if (activeFilter != filter) {
            setActiveFilter(filter);
        } else {
            setActiveFilter("");
        }
    };

    const createColourPopup = (floor: any, imgIndex: any) => {
        const floorPopup = document.createElement("div");
        floorPopup.classList.add("floor-popup");
        floorPopup.innerHTML = `
            <div class="floor-popup_backdrop"></div>
            <div class="floor-popup_inner">
                <div class="floor-popup_close"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z"></path></svg></div>
                <img src="/images/colours/epoxy-floors/new/${imgIndex}/Image (${floor.imgNum}).jpg">
                <p>${floor.name}</p>
            </div>
        `;

        document.body.append(floorPopup);

        document
            .querySelector(".floor-popup_backdrop")
            ?.addEventListener("click", () => {
                document.querySelector(".floor-popup")?.remove();
            });

        document
            .querySelector(".floor-popup_close")
            ?.addEventListener("click", () => {
                document.querySelector(".floor-popup")?.remove();
            });
    };

    return (
        <div className={styles.epoxyColours}>
            <div className={styles.imgFilters}>
                <div
                    className={styles.imgFilter}
                    data-filter=""
                    data-active={activeFilter == ""}
                    onClick={() => handleFilterClick("")}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    <Checkbox /> All Colours
                </div>
                <div
                    className={styles.imgFilter}
                    data-active={activeFilter == "standard"}
                    onClick={() => handleFilterClick("standard")}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    <Checkbox /> Standard Range
                </div>
                <div
                    className={styles.imgFilter}
                    data-active={activeFilter == "highlight"}
                    onClick={() => handleFilterClick("highlight")}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    <Checkbox /> Highlight Range
                </div>
                <div
                    className={styles.imgFilter}
                    data-active={activeFilter == "special"}
                    onClick={() => handleFilterClick("special")}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    <Checkbox /> Special Effects
                </div>
                <div
                    className={styles.imgFilter}
                    data-active={activeFilter == "fruit"}
                    onClick={() => handleFilterClick("fruit")}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    <Checkbox /> Fruit Fantasy
                </div>
                <div
                    className={styles.imgFilter}
                    data-active={activeFilter == "plain"}
                    onClick={() => handleFilterClick("plain")}
                    data-aos="flip-down"
                    data-aos-duration="1000"
                >
                    <Checkbox /> Plain Colours
                </div>
            </div>
            {!activeFilter ? (
                <div className={styles.imgRange}>
                    {items.one.map((floor: any) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                                onClick={() => createColourPopup(floor, 1)}
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
                    {items.three.map((floor: any) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                                onClick={() => createColourPopup(floor, 3)}
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
                    {items.four.map((floor: any) => {
                        return (
                            <div
                                className={styles.floorBoxContainer}
                                key={floor.name + floor.imgNum}
                                onClick={() => createColourPopup(floor, 4)}
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
            ) : (
                <div className={styles.imgRange}>
                    {
                        /* @ts-ignore */
                        items[filters[activeFilter].key].map((floor) => {
                            if (
                                filters[activeFilter].numbers.find(
                                    (num: number) => num === floor.imgNum
                                )
                            )
                                return (
                                    <div
                                        className={styles.floorBoxContainer}
                                        key={floor.name + floor.imgNum}
                                        onClick={() =>
                                            createColourPopup(
                                                floor,
                                                activeFilter == "plain" ? 4 : 1
                                            )
                                        }
                                    >
                                        <div
                                            className={
                                                styles.floorBoxImgContainer
                                            }
                                        >
                                            <Image
                                                src={`/images/colours/epoxy-floors/new/${
                                                    activeFilter == "plain"
                                                        ? 4
                                                        : 1
                                                }/Image (${floor.imgNum}).jpg`}
                                                layout="fill"
                                                alt="Epoxy Floor"
                                            />
                                        </div>
                                        <p className={styles.floorBoxTitle}>
                                            {floor.name}
                                        </p>
                                    </div>
                                );
                        })
                    }
                </div>
            )}
        </div>
    );
};

export default EpoxyColours;
