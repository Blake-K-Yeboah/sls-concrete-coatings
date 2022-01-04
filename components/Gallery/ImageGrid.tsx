import Image from "next/image";
import { FC, useState } from "react";

import styles from "../../styles/Gallery.module.sass";

interface IProps {
    galleryType: string;
}

const ImageGrid: FC<IProps> = (props) => {
    const [activeImg, setActiveImg] = useState<string | null>(null);

    return (
        <>
            <div className={styles.imgGrid}>
                {Array.from(Array(16).keys()).map((i) => {
                    const imgSrc = `/images/gallery/${
                        props.galleryType
                    }/Image (${i + 1}).jpg`;

                    return (
                        <div
                            className={styles.imgContainer}
                            onClick={() => setActiveImg(imgSrc)}
                            key={imgSrc}
                        >
                            <Image
                                src={imgSrc}
                                layout="fill"
                                objectFit="cover"
                                objectPosition="50% 50%"
                            />
                        </div>
                    );
                })}
            </div>
            {activeImg ? (
                <>
                    <div className={styles.activeImgContainer}>
                        <Image src={activeImg} layout="fill" />
                    </div>
                    <div
                        className={styles.overlay}
                        onClick={() => setActiveImg(null)}
                    ></div>
                </>
            ) : (
                ""
            )}
        </>
    );
};

export default ImageGrid;
