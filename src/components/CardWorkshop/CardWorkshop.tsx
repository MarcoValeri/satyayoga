import Image from "next/image";

import styles from "./CardWorkshop.module.scss";

import LotusFlowersRedSmall from "@/assets/images/lotus-flowers-red-yoga-small.png";

interface CardWorkshopProps {
    title: string;
    description: string;
    date: string;
    time: string;
    duration: string;
    address: string;
    buttonLink: string;
    button: string;
}

const CardWorkshop = (props: CardWorkshopProps) => {
    return (
        <div className={styles.cardWorkshop}>
            <div className={styles.cardWorkshop__container_icon}>
                <Image
                    src={LotusFlowersRedSmall}
                    alt="Flowers Lotus Red"
                    width={250}
                    height={250}
                    className={styles.cardWorkshop__icon}
                />
            </div>
            <div className={styles.cardWorkshop__container_title}>
                <h2 className={`${styles.cardWorkshop__title} h3`}>{props.title}</h2>
                <h2 className={`${styles.cardWorkshop__description} p_slim`}>{props.description}</h2>
            </div>
            <div className={styles.cardWorkshop__container_date}>
                <p className="p">{props.date}</p>
                <p className="p">{props.time} - {props.duration}</p>
            </div>
            <div className={styles.cardWorkshop__container_address}>
                <p className="p">{props.address}</p>
            </div>
            <div className={styles.cardWorkshop__container_button}>
                <a className="button_book_red link_no_style" href={props.buttonLink} target="_blank" rel="noopener noreferrer">{props.button}</a>
            </div>
        </div>
    )
}

export default CardWorkshop;