import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

// Page Components
import Title from "../components/Common/Title";

// Styling
import styles from "../styles/FAQ.module.sass";

// Data
import { questionsAndAnswers } from "../data";

const FAQ: NextPage = () => {
    return (
        <>
            <Head>
                <title>SLS Concrete Coatings - FAQ</title>
                <meta charSet="utf-8" />
            </Head>
            <main className={styles.mainContent}>
                <Title type="left" text="Frequently Asked Questions" />
                {questionsAndAnswers.map((q) => {
                    return (
                        <details className={styles.question} key={q.question}>
                            <summary className={styles.questionTitle}>
                                {q.question}
                            </summary>
                            <p
                                className={styles.questionAnswer}
                                dangerouslySetInnerHTML={{ __html: q.answer }}
                            ></p>
                        </details>
                    );
                })}
            </main>
        </>
    );
};

export default FAQ;
