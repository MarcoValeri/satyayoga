import LinkBook from "../LinkBook/LinkBook";
import { formatTime, formatDate, getDurationFromTwoDates } from "../../util/dateAndTime";
import { FaMapMarker } from "react-icons/fa";
import { GrFormNextLink } from "react-icons/gr";
import styles from "./CardClassBook.module.scss";

interface CardClassBookProps {
    dateStart: string;
    dateEnd: string;
    time: string;
    title: string;
    teacherLink: string;
    teacher: string;
    venue: string;
    venueAddress: string;
    booking: string;
}

const CardClassBook = (props: CardClassBookProps) => {
    return (
        <div className={styles.cardClassBook}>
            <div className={styles.cardClassBook__container_info}>
                <p className={styles.cardClassBook__date}>{formatDate(props.dateStart)}</p>
                <p className={styles.cardClassBook__time}>{formatTime(props.time)}</p>
                <p className={styles.cardClassBook__time}>{getDurationFromTwoDates(props.dateStart, props.dateEnd)} min</p>
            </div>
            <div className={styles.cardClassBook__container_data}>
                <p className={styles.cardClassBook__title}>{props.title}</p>
                <p className={styles.cardClassBook__teacher}>{props.teacherLink && <a href={props.teacherLink} target="_blank" rel="noopener noreferrer"><GrFormNextLink className={styles.cardClassBook__map_icon} /></a>} {props.teacher}</p>
                <p className={styles.cardClassBook__location}>{props.venueAddress && <a href={props.venueAddress} target="_blank" rel="noopener noreferrer"><FaMapMarker className={styles.cardClassBook__map_icon} /></a>} {props.venue}</p>
            </div>
            <div className={styles.cardClassBook__container_book}>
                <LinkBook
                    url={props.booking}
                    content="BOOK"
                />
            </div>
        </div>
    )
}

export default CardClassBook;