import { FC } from "react";

// Props Interface
interface IProps {
    text: string;
    type: "left" | "center"; // Alignment
}

const Title: FC<IProps> = ({ text, type }) => {
    return (
        <>
            <h2 className={`section-title ${type}`}>{text as string}</h2>
            <div className={`section-divider ${type}`}></div>
        </>
    );
};

export default Title;
