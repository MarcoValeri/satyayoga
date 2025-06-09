import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";

import { FaHeart } from "react-icons/fa";

import styles from "./contact.module.scss";

const Contact = () => {
    return (
        <>
            <Nav />
            <Header title="Contact us" />
            <div className={styles.contact}>
                <div className={styles.contact__container_content}>
                    <div className={styles.contact__container_content_title}>
                        <h1 className={`${styles.contact__title} h1`}>Join our Community</h1>
                        <FaHeart className={styles.contact__heart} />
                    </div>
                    <p className={`${styles.contact__content} p`}>Do you have questions about our classes or what we do? We'd love to hear from you.</p>
                    <p className={`${styles.contact__content} p`}>We're here to support you on your yoga path.</p>
                    <p className={`${styles.contact__content} p`}>Drop us a message with your query or simply to say hello.</p>
                    <p className={`${styles.contact__content} p`}>We look forward to connecting with you.</p>
                    <p className={`${styles.contact__content} p`}><strong>Email:</strong> <a href="mailto:hello@satyayogacommunity.com">hello@satyayogacommunity.com</a></p>
                    <p className={`${styles.contact__content} p`}><strong>Follow us on Instagram:</strong> <a href="https://www.instagram.com/Satyayogacommunity/" rel="noopener noreferrer">satyayogacommunity</a></p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Contact;