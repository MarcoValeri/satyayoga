import styles from "./TitleMoving.module.scss";

interface TitleMovingProps {
    title: string;
}

const TitleMoving = (props: TitleMovingProps) => {
    return (
        <div className={styles.titleMoving}>
            <div className={styles.titleMoving__container_title}>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
                <h2 className={`${styles.titleMoving__title} h2 lato_regular_italic`}>{props.title}</h2>
            </div>
        </div>
    )
}

export default TitleMoving;