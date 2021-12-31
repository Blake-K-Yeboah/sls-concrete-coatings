import { FC } from "react";

// Styling
import styles from "../../styles/ColourChart.module.sass";

// Data
import { sprayPavingColours } from "../../data";

const SprayPavingColours: FC = () => {
    return (
        <div className={styles.colourGrid}>
            {sprayPavingColours.map((color) => {
                return (
                    <div
                        className={styles.colourBoxContainer}
                        key={color.color}
                    >
                        <div
                            className={styles.colourBox}
                            style={{ backgroundColor: color.color }}
                        ></div>
                        <p className={styles.colourName}>{color.name}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default SprayPavingColours;
