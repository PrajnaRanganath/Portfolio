import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.container}>

      <h1 className={styles.code}>404</h1>

      <div className={styles.line}></div>

      <h2 className={styles.text}>PAGE NOT FOUND</h2>

      <Link href="/" className={styles.home}>
        [ Return Home ]
      </Link>

    </main>
  );
}