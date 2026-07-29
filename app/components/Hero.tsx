import Navbar from "./Navbar";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>

      <Navbar />

      <div className={styles.heroContent}>

        <h1 className={styles.heroTitle}>
          PRAJNA
          <br />
          RANGANATH
        </h1>

        <div className={styles.heroLine}></div>

        <p className={styles.heroSubtitle}>
          ELECTRONICS AND COMMUNICATION ENGINEERING GRADUATE | EMBEDDED
          <br />
          SYSTEMS | ROBOTICS | COMPUTER VISION | ROS | INTELLIGENT CONTROL
        </p>

        <a
          href="/CV.pdf"
          className={styles.downloadCV}
          download
        >
        [Download CV]
        </a>

      </div>

    </section>
  );
}