import styles from "./ErrorMessage.module.scss";

const ErrorMessage = props => {
    return (
        <div className={styles.errorMessage__container_loading}>
            <h2 className={`${styles.errorMessage__loading_title} h2`}>{props.title}</h2>
            <p className="p_xl" dangerouslySetInnerHTML={{__html: props.message}} />
        </div>
    )
}

export default ErrorMessage;