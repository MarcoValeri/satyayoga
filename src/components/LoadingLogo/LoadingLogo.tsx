import Image from "next/image";

import styles from "./LoadingLogo.module.scss";

import SatyaYogaCommunityLogo from "@/assets/images/satya-yoga-community-logo.png";

interface LoadingLogoProps {
    title: string;
}

const LoadingLogo = (props: LoadingLogoProps) => {
    return (
        <div className={styles.loadingLogo}>
            <div className={styles.loadingLogo__wrapper}>
                <h2 className={`${styles.loadingLogo__title} h2`}>{props.title}</h2>
                <div className={styles.loadingLogo__container_loading}></div>
                <div className={styles.loadingLogo__container_logo}>
                    <Image
                        src={SatyaYogaCommunityLogo}
                        alt="Elephant, the logo of Satya Yoga Community"
                        width={250}
                        height={250}
                        className={styles.loadingLogo__logo}
                    />
                    {/* <img className="loadingLogo__logo" src={SatyaYogaCommunityLogo} alt="Elephant, the logo of Satya Yoga Community" /> */}
                </div>
            </div>
        </div>
    )
}

export default LoadingLogo;