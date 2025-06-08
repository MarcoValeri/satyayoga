"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Image, { type StaticImageData } from "next/image";

import styles from "./Community.module.scss";

import SatyaYogaClassAngelOmnomLondon from "@/assets/images/satya-yoga-class-angel-omnom-london.webp";
import SatyaYogaGroupCommunity from "@/assets/images/satya-yoga-group-community.webp";
import SatyaYogaIslingtonVinyasa from "@/assets/images/satya-yoga-islington-vinyasa.webp";
import SatyaYogaClassAngelGroup from "@/assets/images/satya-yoga-class-angel-group.webp";
import SatyaYogaClassAngelLondon from "@/assets/images/satya-yoga-class-angel-london.webp";
import SatyaYogaCommunityOmnom from "@/assets/images/satya-yoga-community-omnom.webp";

const Community = () => {

    const [carouselStatus, setCarouselStatus] = useState(false);
    const [windowidth, setWindowWith] = useState(0);
    const [carouselSlide, setCarouselSlide] = useState(0);
    
    useEffect(() => {
        setWindowWith(window.innerWidth);

        const handleResize = () => {
            setWindowWith(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (windowidth >= 992) {
            setCarouselStatus(false);
        }
    }, [windowidth]);

    const handleClickCarouselSlide = (direction: string) => {
        setCarouselStatus(true);
        setCarouselSlide(position => {
            if (direction === 'left') {
                if (position === 0) {
                    return position = 5;
                } else {
                    return position - 1;
                }
            } else {
                if (position === 5) {
                    return position = 0;
                } else {
                    return position + 1;
                }
            }

        })
    }

    const carouselArr: [StaticImageData, string][] = [
        [SatyaYogaCommunityOmnom, 'Satya Yoga Community people after class at Omnom in Islington'],
        [SatyaYogaClassAngelOmnomLondon, 'Satya Yoga Group Class At Omnom London'],
        [SatyaYogaIslingtonVinyasa, 'Satya Yoga Islington Vinyasa'],
        [SatyaYogaClassAngelGroup, 'Satya Yoga Community Group'],
        [SatyaYogaClassAngelLondon, 'Satya Yoga Community Teaching in Islingtons'],
        [SatyaYogaGroupCommunity, 'Satya Yoga Group Community'],
    ];

    return (
        <div className={styles.community}>
            <div className={styles.community__container_pink}></div>
            <div className={styles.community__container_purple}></div>
            <div className={styles.community__container_content}>
                <div className={styles.community__container_content_image}>
                    {
                        carouselArr.map((itemImage, index) => {
                            return (
                                <div key={index} className={`${styles.community__container_single_image} ${styles.community__container_single_image_}${index + 1} ${carouselStatus ? carouselSlide === index ? `${styles.community__container_single_image__show}` : `${styles.community__container_single_image__hide}` : ''}`}>
                                    <Image
                                        src={itemImage[0]}
                                        alt={itemImage[1]}
                                        width={1000}
                                        height={1000}
                                        className={styles.community__image}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
                <div className={styles.community__container_content_wording}>
                    <h4 className={styles.community__wording}>Our community</h4>
                </div>
                <div className={styles.community__container_arrows}>
                    <FaArrowLeftLong
                        className={styles.community__arrow}
                        onClick={() => handleClickCarouselSlide('left')}
                    />
                    <FaArrowRightLong
                        className={styles.community__arrow}
                        onClick={() => handleClickCarouselSlide('right')}
                    />
                </div>
            </div>
        </div>
    )
}

export default Community;