import Link from "next/link";
import React from "react";
import DarkLatout from "../components/layouts/DarkLatout";
import styles from "../components/layouts/Main.module.css";
import MainLayout from "../components/layouts/MainLayout";
const AboutPage = () => {
  return (
    <>
      <h1>About</h1>
      <h1 className={styles.title}>
        Go to+ <Link href="/">Initial Page</Link>
      </h1>

      <p className={styles.description}>
        This the first example on my course of next js{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLatout>{page}</DarkLatout>
    </MainLayout>
  );
};

export default AboutPage;
