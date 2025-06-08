import styles from "./LinkBook.module.scss";

interface LinkBookProps {
    url: string;
    content: string;
}

const LinkBook = (props: LinkBookProps) => {
    return (
        <a className={`${styles.linkBook} link_no_style`} href={props.url} target="_blank">{props.content}</a>
    )
}

export default LinkBook;