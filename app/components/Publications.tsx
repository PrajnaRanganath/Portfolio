import styles from "./Publications.module.css";

export default function Publications() {
  return (
    <section id="publications" className={styles.publications}>

      <div className={styles.headingRow}>

        <div className={styles.number}>
          <span className={styles.zero}>0</span>
          <span className={styles.four}>4.</span>
        </div>

        <h2 className={styles.heading}>Publications</h2>

        <div className={styles.line}></div>

      </div>

      <div className={styles.text}>

        <p>
        I am currently building my research portfolio through projects in robotics, embedded 
        systems, computer vision, and intelligent control. Publications and technical articles
         will be added here as my research progresses.
        </p>


      </div>

    </section>
  );
}