"use client";
import { useState } from "react";
import Image from 'next/image';
import Link from "next/link";
import { FiInstagram } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

import styles from "./Nav.module.scss";

import SatyaYogaCommunityLogo from "@/assets/images/satya-yoga-community-logo.png"

const Nav = () => {

    const [navMobileOpen, setNavMobileOpen] = useState(false);

    const handleOpenMobileMenuClick = () => {
        navMobileOpen ? setNavMobileOpen(false) : setNavMobileOpen(true);
    }

    return (
        <nav className={styles.nav}>
            <div className={styles.nav__container_logo}>
                <Link href="/" className={`${styles.nav__link} link_no_style`}>
                    <Image
                        src={SatyaYogaCommunityLogo}
                        alt="Satya Yoga Community Logo"
                        width={150}
                        height={50}
                        className={styles.nav__logo}
                        priority
                    />
                </Link>
            </div>
            <div className={styles.nav__container_links}>
                <ul className={styles.list_no_disk}>
                    <li className={`${styles.nav__menu_link} p_md`}><Link href="/about" className={`${styles.nav__link} link_no_style`}>About us</Link></li>
                    <li className={`${styles.nav__menu_link} p_md`}><Link href="/classes" className={`${styles.nav__link} link_no_style`}>Classes</Link></li>
                    <li className={`${styles.nav__menu_link} p_md`}><Link href="/workshops" className={`${styles.nav__link} link_no_style`}>Workshops</Link></li>
                    <li className={`${styles.nav__menu_link} p_md`}><Link href="/our-projects" className={`${styles.nav__link} link_no_style`}>Projects</Link></li>
                    <li className={`${styles.nav__menu_link} p_md`}><Link href="/contact" className={`${styles.nav__link} link_no_style`}>Contact us</Link></li>
                </ul>
            </div>
            <div className={styles.nav__container_social}>
                <ul className={`list_no_disk`}>
                    <li className={styles.nav__menu_link}><a className={`${styles.nav__link} link_no_style`} href="https://www.instagram.com/Satyayogacommunity/" target="_blank" rel="noopener noreferrer"><FiInstagram className={styles.nav__social_icon} /></a></li>
                    <li className={styles.nav__menu_link}><a className={`${styles.nav__link} link_no_style`} href="mailto:hello@satyayogacommunity.com"><TfiEmail className={styles.nav__social_icon} /></a></li>
                </ul>
            </div>
            <div className={styles.nav__container_lines} onClick={handleOpenMobileMenuClick}>
                <span className={`${styles.nav__line} ${styles.nav__line__one} ${navMobileOpen && styles.nav__line__one_open}`}></span>
                <span className={`${styles.nav__line} ${styles.nav__line__two} ${navMobileOpen && styles.nav__line__two_open}`}></span>
                <span className={`${styles.nav__line} ${styles.nav__line__three} ${navMobileOpen && styles.nav__line__three_open}`}></span>
            </div>
            <div className={`${styles.nav__mobile_menu_container} ${navMobileOpen && styles.nav__mobile_menu_container__open}`} onClick={handleOpenMobileMenuClick}>
                <ul className={`list_no_disk`}>
                    <li className={`${styles.nav__mobile_menu_item} p_xl`}><Link href="/" className={`${styles.nav__link} link_no_style`}>Home</Link></li>
                    <li className={`${styles.nav__mobile_menu_item} p_xl`}><Link href="/about" className={`${styles.nav__link} link_no_style`}>About us</Link></li>
                    <li className={`${styles.nav__mobile_menu_item} p_xl`}><Link href="/classes" className={`${styles.nav__link} link_no_style`}>Classes</Link></li>
                    <li className={`${styles.nav__mobile_menu_item} p_xl`}><Link href="/workshops" className={`${styles.nav__link} link_no_style`}>Workshops</Link></li>
                    <li className={`${styles.nav__mobile_menu_item} p_xl`}><Link href="/our-projects" className={`${styles.nav__link} link_no_style`}>Projects</Link></li>
                    <li className={`${styles.nav__mobile_menu_item} p_xl`}><Link href="/contact" className={`${styles.nav__link} link_no_style`}>Contact us</Link></li>
                    <li className={styles.nav__mobile_menu_item}><a className={`${styles.nav__link} link_no_style`} href="https://www.instagram.com/Satyayogacommunity/" target="_blank" rel="noopener noreferrer"><FiInstagram className={`${styles.nav__social_icon} ${styles.nav__social_icon__mobile}`} /></a> <a className={`${styles.nav__link} link_no_style`} href="mailto:hello@satyayogacommunity.com"><TfiEmail className={styles.nav__social_icon} /></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;