import { FC } from "react";
import Title from "../Common/Title";

interface IProps {
    title: string;
    text: string;
}

import styles from "../../styles/SprayPaving.module.sass";

const CenteredTextSection: FC<IProps> = (props) => {
    return (
        <div className={styles.centeredTextSection}>
            <Title type="center" text={props.title} />
            <p className={`${styles.text} ${styles.centeredText}`}>
                {props.text as string}
            </p>
        </div>
    );
};

export default CenteredTextSection;
