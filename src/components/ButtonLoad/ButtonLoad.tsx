import styles from "./ButtonLoad.module.scss";

interface ButtonLoadProps {
    content: string;
    onClick: () => void;
}

const ButtonLoad = (props: ButtonLoadProps) => {
    return (
        <button onClick={props.onClick} className={styles.buttonLoad}>{props.content}</button>
    )
}

export default ButtonLoad;