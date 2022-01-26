import { FC } from "react";

// Styling
import styles from "../../styles/ContactUs.module.sass";

const ContactForm: FC = () => {
    return (
        <form
            className={styles.contactForm}
            action="https://formspree.io/f/mnqwjkra"
            method="POST"
        >
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name"
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="address">Address</label>
                <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Enter your address"
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="phone">Phone #</label>
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Enter your phone #"
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className={styles.input}
                />
            </div>
            <div className={styles.formGroup}>
                <label htmlFor="enquiry">Enquiry</label>
                <textarea
                    name="enquiry"
                    id="enquiry"
                    placeholder="Enter your enquiry"
                    className={styles.textarea}
                ></textarea>
            </div>
            <div className={styles.formGroup}>
                <button type="submit" className="btn primary">
                    Send Enquiry
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
