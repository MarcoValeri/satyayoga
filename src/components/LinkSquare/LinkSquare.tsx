import Link from "next/link";

import styles from "./LinkSquare.module.scss";

interface LinkSquareProps {
    url: string;
    content: string;
}

const LinkSquare = (props: LinkSquareProps) => {
    return (
        <Link className={`${styles.linkSquare} p_md`} href={props.url}>{props.content}</Link>
    )
}

export default LinkSquare;