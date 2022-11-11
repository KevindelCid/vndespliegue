import Link from "next/link";
import React from "react";

// import styles from "../../components/layouts/Main.module.css";
import MainLayout from "../../components/layouts/MainLayout";
import styles from "../../components/layouts/Main.module.css";
const contact = () => {
  return (
    <MainLayout>
      <h1>contact</h1>
      <h1 className={"title"}>
        Go to+ <Link href="/">Initial Page</Link>
      </h1>

      <p className={"description"}>
        This the first example on my course of next js{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </MainLayout>
  );
};

export default contact;
