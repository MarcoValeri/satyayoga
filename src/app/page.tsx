import Nav from '@/components/Nav/Nav';

import styles from "./page.module.scss";

const Home = () => {
    return (
        <div className={styles.home}>
            <Nav />
            <h2>Satya Yoga Community</h2>
        </div>
    )
}

export default Home;