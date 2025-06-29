import Community from "@/components/Community/Community";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import TitleMoving from "@/components/TitleMoving/TitleMoving";

import styles from "./about.module.scss";

const About = () => {
    return (
        <>
            <Nav />
            <Header title="About us" />
            <TitleMoving title="More than just a yoga studio, a community hub" />
            <div className={styles.about}>
                <div className={styles.about__wrapper}>
                    <div className={styles.about__container_content}>
                        <p className={`${styles.about__content} p`}>Satya is the Sanskrit word for “truthfulness”, one of  the core values of yoga philosophy. It invites us to engage in a transparent dialogue with ourselves and others, creating solid connections based on honesty.</p>
                        <p className={`${styles.about__content} p`}>The Bhagavad Gita teaches us that “Yoga is the journey of the self, through the self, to the self”, but it is not a journey we have to take on our own!</p>
                        <p className={`${styles.about__content} p`}>Satya Yoga was born from the desire to create a space where new and seasoned yoga students as well as yoga teachers connect and build a community.</p>
                        <p className={`${styles.about__content} p`}>Our journey starts in London, a city full of opportunities and people, where it is however easy to feel lonely, even in the yoga world. At Satya Yoga, we support each other, grow together, and have fun.</p>
                        <p className={`${styles.about__content} p`}>Founded by triyoga graduates Vittoria Vergani and Caterina Giordo, Satya Yoga is more than a studio; it’s a community hub. Beyond yoga, our commitment extents to social initiatives, offering the opportunity to the Satya yogis to feel part of something bigger and reach where help is needed.</p>
                        <p className={`${styles.about__content} p`}>We envision a London where yoga is a holistic practice, one that nourishes both individual growth and collective well-being.</p>
                        <p className={`${styles.about__content} p`}>Join us on this journey.</p>
                    </div>
                    <div className={styles.about__container_offering}>
                        <p className={`${styles.about__content} p_lg`}><strong>Offerings</strong></p>
                        <ul className="list">
                            <li className="list_item">Open Level Vinyasa</li>
                            <li className="list_item">Dynamic Vinyasa</li>
                            <li className="list_item">Flow & Restore</li>
                            <li className="list_item">Workshops</li>
                            <li className="list_item">Private Classes</li>
                            <li className="list_item">Retreats</li>
                        </ul>
                    </div>
                </div>
                <Community />
            </div>
            <Footer />
        </>
    )
}

export default About;