import Image from 'next/image';
import Nav from '@/components/Nav/Nav';

import styles from "./page.module.scss";

import SatyaYogaClassAngelGroup from '@/assets/images/satya-yoga-class-angel-group.webp';
import SatyaYogaStudioOmnom from '@/assets/images/satya-yoga-studio-omnom.webp';

import { fetchEventbriteEvents, EventbriteEvent } from '@/lib/eventbrite';

const getLastThreeEvents = async () => {
    const allEvents = await fetchEventbriteEvents();
    return allEvents.slice(0, 3);
}

const Home = async () => {

    const eventbriteYogaEvents: EventbriteEvent[] = await getLastThreeEvents();

    console.log(`TEST`);
    console.log(eventbriteYogaEvents);

    return (
        <div className={styles.home}>
            <Nav />
            <div className={styles.home__header}>
                <div className={styles.home__header_container_title}>
                    <h1 className={styles.home__header_title}>SATYA YOGA</h1>
                    <h2 className={`${styles.home__header_sub_title} h1`}>Join our Community</h2>
                </div>
                <div className={styles.home__header_container_images}>
                    <div className={styles.home__header_container_image_one}>
                        {/* <img className="home__header-image-one" src={SatyaYogaClassAngelGroup} alt="Satya Yoga Class at Angel Studio in London" /> */}
                        <Image
                            src={SatyaYogaClassAngelGroup}
                            alt="Satya Yoga Class at Angel Studio in London"
                            width={250}
                            height={250}
                            className={styles.home__header_image_one}
                            priority
                        />
                    </div>
                    <div className={styles.home__header_container_image_two}>
                        {/* <img className="home__header-image-two" src={SatyaYogaStudioOmnom} alt="Victoria teachear assisting" /> */}
                        <Image
                            src={SatyaYogaStudioOmnom}
                            alt="Victoria teachear assisting"
                            width={250}
                            height={250}
                            className={styles.home__header_image_two}
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;