import Link from "next/link";
import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import styles from "./Footer.module.scss";

import SatyaYogaCommunityLogo from "@/assets/images/satya-yoga-community-logo.png";

const getYear = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__wrapper}>
                <div className={styles.footer__container_credits}>
                    <div>
                        <Image
                            src={SatyaYogaCommunityLogo}
                            alt="Satya Yoga Community logo, a white elephant with a red sun in the background"
                            width={250}
                            height={250}
                            className={styles.footer__logo}
                        />
                    </div>
                    <div>
                        <p className={`${styles.footer__content} p_sm`}>For more information, email us:</p>
                        <p className={`${styles.footer__content} p_sm`}><a className={`${styles.footer__link} link_no_style`} href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a></p>
                        <p className={`${styles.footer__content} p_sm`}>&copy; {getYear} - SATYA YOGA</p>
                    </div>
                </div>
                <div className={styles.footer__container_newsletter}></div>
            </div>
            <div className={styles.footer__nav}>
                <div className={styles.footer__nav_container_links}>
                    <ul className={`list_no_disk`}>
                        <li className={`${styles.footer__nav_link} p_md`}>
                            <Link href="/about" className={`${styles.footer__nav_link} link_no_style`}>About us</Link>
                        </li>
                        <li className={`${styles.footer__nav_link} p_md`}>
                            <Link href="/contact" className={`${styles.footer__nav_link} link_no_style`}>Contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <ul className={`list_no_disk`}>
                        <li className={styles.footer__nav_link_social}><a className={`${styles.footer__link} link_no_style`} href="https://www.instagram.com/Satyayogacommunity/" target="_blank"rel="noopener noreferrer"><FiInstagram className={styles.footer__social_icon} /></a></li>
                        <li className={styles.footer__nav_link_social}><a className={`${styles.footer__link} link_no_style`} href="mailto:hello@satyayogacommunity.com"><TfiEmail className={styles.footer__social_icon} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer;