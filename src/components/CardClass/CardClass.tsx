import Image from "next/image";
import { formatTime, formatLongDate, getDurationFromTwoDates } from "@/util/dateAndTime";

import styles from "./CardClass.module.scss";

import LotusFlowersRedSmall from "@/assets/images/lotus-flowers-red-yoga-small.png"

interface CardClassProps {
    title: string;
    dateStart: string;
    dateEnd: string;
    time: string;
    venue: string;
    buttonLink: string;
    button: string;
}

const CardClass = (props: CardClassProps) => {
    return (
        <div className={styles.cardClass}>
            <div className={styles.cardClass__container_logo}>
                <Image 
                    src={LotusFlowersRedSmall}
                    alt="Flowers Lotus Red"
                    width={250}
                    height={250}
                    className={styles.cardClass__logo}
                />
            </div>
            <div className={styles.cardClass__container_title}>
                <h2 className={`${styles.cardClass__title} h4`}>{props.title}</h2>
            </div>
            <div className={styles.cardClass__container_date}>
                <p className={`p`}>{formatLongDate(props.dateStart)}</p>
                <p className={`p`}>{formatTime(props.time)} - {getDurationFromTwoDates(props.dateStart, props.dateEnd)} min</p>
            </div>
            <div className={styles.cardClass__container_address}>
                <p className={`p`}>{props.venue}</p>
            </div>
            <div className={styles.cardClass__container_button}>
                <a className={`button_book_red link_no_style`} href={props.buttonLink} target="_blank" rel="noopener noreferrer">{props.button}</a>
            </div>
        </div>
    )
}

export default CardClass;