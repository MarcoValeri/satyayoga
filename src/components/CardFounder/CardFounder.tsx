import Image, { StaticImageData } from "next/image";

import { FaInstagram } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";

import styles from "./CardFounder.module.scss";

interface CardFounderProps {
    founderImage: StaticImageData;
    onCloseCard: () => void;
    founderName: string;
    founderQuote: string;
    founterInstagram: string;
}

const CardFounder = (props: CardFounderProps) => {

    return (
        <div className={styles.cardFounder}>
            <div className={styles.cardFounder__wrapper}>
                <div className={styles.cardFounder__container_image}>
                    {/* <img className="cardFounder__image" src={props.founderImage} alt="Founder members of the Satya Yoga" /> */}
                    <Image
                        src={props.founderImage}
                        alt="Founder members of the Satya Yoga"
                        width={250}
                        height={250}
                        className={styles.cardFounder__image}
                    />
                </div>
                <div className={styles.cardFounder__container_data}>
                    <div className={styles.cardFounder__container_data_close}>
                        <IoCloseSharp
                            className={styles.cardFounder__close_icon}
                            onClick={props.onCloseCard}
                        />
                    </div>
                    <div className={styles.cardFounder__container_data_name}>
                        <h2 className={`${styles.cardFounder__name} h2`}>{props.founderName}</h2>
                    </div>
                    <p className={`${styles.cardFounder__quote} p_lg`}>{props.founderQuote}</p>
                    <a className={styles.cardFounder__instagram} href={props.founterInstagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
            </div>
        </div>
    )
}

export default CardFounder;