import { Suspense } from 'react';
import Image from 'next/image';
import Nav from '@/components/Nav/Nav';
import CardClassSkeleton from '@/components/CardClassSkeleton/CardClassSkeleton';
import EventbriteYogaEvents from '@/components/EventbriteYogaEvents/EventbriteYogaEvents';
import LinkSquare from '@/components/LinkSquare/LinkSquare';

import styles from "./page.module.scss";

import SatyaYogaClassAngelGroup from '@/assets/images/satya-yoga-class-angel-group.webp';
import SatyaYogaStudioOmnom from '@/assets/images/satya-yoga-studio-omnom.webp';

const Home = () => {

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
            <main className={styles.home__main}>
                <div className={styles.home__main_container_title}>
                    <h3 className="h1">Practice with us</h3>
                </div>
                <div className={styles.home__main_container_classes}>
                    <Suspense fallback={
                        <>
                            <CardClassSkeleton />
                            <CardClassSkeleton />
                            <CardClassSkeleton />
                        </>
                    }>
                        <EventbriteYogaEvents
                            eventsNumber={3}
                        />
                    </Suspense>
                </div>
                <div className={styles.home__main_container_buttons}>
                    <LinkSquare
                        url="/classes"
                        content="Classes"
                    />
                    <LinkSquare
                        url="/workshops"
                        content="Workshops"
                    />
                    <LinkSquare
                        url="/our-projects"
                        content="Projects"
                    />
                </div>
            </main>
        </div>
    )
}

export default Home;