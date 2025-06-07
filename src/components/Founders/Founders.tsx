"use client";
import { useState } from "react";
import Image from "next/image";
import CardFounder from "../CardFounder/CardFounder";

import styles from "./Founders.module.scss";

import SatyaYogaFounders from "@/assets/images/vittoria-caterina-satya-yoga-founders.webp";
import CaterinaGiordoTeacher from "@/assets/images/caterina-giordo-teacher.webp";
import VittoriaVergariTeacher from "@/assets/images/vittoria-vergari-teacher.webp";

const Founders = () => {

    const [showCaterinaCard, setShowCaterinaCard] = useState(false);
    const [showVittoriaCard, setShowVittoriaCard] = useState(false);

    const handleCaterinaCard = () => {
        if (showCaterinaCard) {
            setShowCaterinaCard(false);
        } else {
            setShowCaterinaCard(true);
            setShowVittoriaCard(false);
        }
    }

    const handleVittoriaCard = () => {
        if (showVittoriaCard) {
            setShowVittoriaCard(false);
        } else {
            setShowVittoriaCard(true);
            setShowCaterinaCard(false);
        }
    }

    return (
        <div className={styles.founders}>
            <div className={styles.founders__container_background_pink}></div>
            <div className={styles.founders__container_background_white}></div>
            <div className={styles.founders__container_content}>
                <div className={styles.founders__container_content_title}>
                    <h2 className={`${styles.founders__content_title} h1`}>Founders</h2>
                </div>
                <div className={styles.founders__container_content_info}>
                    <div className={styles.founders__container_content_info_image}>
                        {/* <img className="founders__content-image" src={SatyaYogaFounders} alt="Caterina and Vittoria, the two founders that are making yoga at the park" /> */}
                        <Image
                            src={SatyaYogaFounders}
                            alt="Caterina and Vittoria, the two founders that are making yoga at the park"
                            width={250}
                            height={250}
                            className={styles.founders__content_image}
                        />
                    </div>
                    <div className={styles.founders__container_content_info_card}>
                        <p className={`${styles.founders__container_content_info_card_p} p_sm`}>Satya Yoga was co-founded by triyoga graduates<br/><span className="link_red" onClick={handleCaterinaCard}>Caterina Giordo</span> and <span className="link_red" onClick={handleVittoriaCard}>Vittoria Vergani</span>.</p>
                        <p className="p_sm">Strong advocates for the yoga community, together, they created a supportive space where yogis can connect, grow, and thrive.</p>
                    </div>
                </div>
            </div>
            {showCaterinaCard && 
                (
                <div className={styles.founders__container_cards}>
                    <CardFounder
                        founderImage={CaterinaGiordoTeacher}
                        onCloseCard={handleCaterinaCard}
                        founderName="Caterina Giordo"
                        founderQuote="Cat, a Hatha-Vinyasa yoga teacher, guides students on a journey of self-discovery through intentional practice. She aims to create a supportive yet challenging environment for yogis of all levels, encouraging them to step away from their busy lives and connect with the present moment."
                        founterInstagram="https://www.instagram.com/catgiordo/"
                    />
                </div>
                )
            }
            {showVittoriaCard && 
                (
                <div className={styles.founders__container_cards}>
                    <CardFounder
                        founderImage={VittoriaVergariTeacher}
                        onCloseCard={handleVittoriaCard}
                        founderName="Vittoria Vergani"
                        founderQuote="Thanks to her medical background that allows her to integrate science and spirituality, Vic brings a unique perspective to her practice. She’s a Hatha-Vinyasa yoga teacher and breathwork and meditation teacher."
                        founterInstagram="https://www.instagram.com/vickivergani/"
                    />
                </div>
                )
            }
        </div>
    )
}

export default Founders;