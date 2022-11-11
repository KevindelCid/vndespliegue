import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

import styles from "../components/layouts/Main.module.css";

export default function Home() {
  return (
    <MainLayout>
      <h1>Home</h1>
      <h1 className={styles.title}>
        {/* Go to <a href="/about">About</a> */}
        Go to <Link href="/about">About</Link>
      </h1>

      <p className={styles.description}>
        This the first example on my course of next js{" "}
        <code className={styles.code}>pages/index.js</code>
      </p>
    </MainLayout>
  );
}
