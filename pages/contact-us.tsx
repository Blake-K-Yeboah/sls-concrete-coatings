import type { NextPage } from "next";
import Head from "next/head";
import React from "react";

// Page Components
import Title from "../components/Common/Title";
import ContactForm from "../components/ContactUs/ContactForm";

// Styling
import styles from "../styles/ContactUs.module.sass";

const ContactUs: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - Contact Us</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.mainContentGrid}>
                <div className={styles.content}>
                    <Title type="left" text="Contact Us" />
                    <p className={styles.regularText}>
                        If you would like any further information about anything
                        that we do, or you would simply like to talk to someone
                        about getting a quote for your project, please feel free
                        to contact us through any of the methods below, or fill
                        out the form and one of our team will get back to you.
                    </p>
                    <div className={styles.divider}></div>
                    <h4 className={styles.contactInfoTitle}>
                        Contact Information:
                    </h4>
                    <p className={styles.contactInfo}>
                        <b>Phone:</b> 0411 810 318
                    </p>
                    <p className={styles.contactInfo}>
                        <b>Email:</b>{" "}
                        info@southbrisbaneconcreteresurfacing.com.au
                    </p>
                </div>
                <div className={styles.contactFormContainer}>
                    <h4 className={styles.contactFormTitle}>Contact Form</h4>
                    <ContactForm />
                </div>
            </main>
        </>
    );
};

export default ContactUs;
