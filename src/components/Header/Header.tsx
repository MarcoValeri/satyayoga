import styles from "./Header.module.scss";

interface HeaderProps {
    title: string;
}

const Header = (props: HeaderProps) => {
    return (
        <div className={styles.header}>
            <div className={styles.header__container_title}>
                <h1 className={styles.header__title}>{props.title}</h1>
            </div>
        </div>
    )
}

export default Header;