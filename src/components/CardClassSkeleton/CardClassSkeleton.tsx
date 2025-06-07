import Image from "next/image";

import styles from "./CardClassSkeleton.module.scss";

import LotusFlowersRedSmall from "@/assets/images/lotus-flowers-red-yoga-small.png";
import SatyaYogaCommunityLogo from "@/assets/images/satya-yoga-community-logo.png";

const CardClassSkeleton = () => {
    return (
        <div className={styles.cardClassSkeleton}>
            <div className={styles.cardClassSkeleton__container_logo}>
                <Image 
                    src={LotusFlowersRedSmall}
                    alt="Flowers Lotus Red"
                    width={250}
                    height={250}
                    className={styles.cardClassSkeleton__logo}
                />
            </div>
            <div className={styles.cardClassSkeleton__container_title}>
                <h2 className={`${styles.cardClassSkeleton__title} h4`}>Open Vinyasa</h2>
            </div>
            <div className={styles.cardClassSkeleton__container_loading}></div>
            <div className={styles.cardClassSkeleton__container_loading_logo}>
                <Image
                    src={SatyaYogaCommunityLogo}
                    alt="Elephant, the logo of Satya Yoga Community"
                    width={250}
                    height={250}
                    className={styles.cardClassSkeleton__loading_logo}
                />
            </div>
        </div>
    )
}

export default CardClassSkeleton;