import Link from "next/link";
import MainLayout from "../../components/layouts/MainLayout";
import styles from "../../components/layouts/Main.module.css";

const Pricing = () => {
  return (
    <>
      <h1>Pricing</h1>
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

Pricing.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      {/* <DarkLatout>{page}</DarkLatout> */}
      {page}
    </MainLayout>
  );
};

export default Pricing;
