import styles from "./Footer.module.css";

import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import {
  HiOutlineMail
} from "react-icons/hi";

export default function Footer() {

  return (

    <footer className={styles.footer}>

      <div className={styles.left}>

        <a
          href="mailto:prajnaranganath@gmail.com"
          className={styles.contactLink}
        >
          <HiOutlineMail />
          <span>prajnaranganath@gmail.com</span>
        </a>

        <div className={styles.links}>

          <a
            href="https://github.com/PrajnaRanganath"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
            <span>GitHub</span>
          </a>

          <a
            href="https://linkedin.com/in/prajna-ranganath"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>

        </div>

        <a
          href="/archive"
          className={styles.archive}
        >
          Project Archive
        </a>

      </div>

      <div className={styles.center}>

        <p className={styles.quote}>
          “Somewhere, something incredible is waiting to be known”
        </p>

        <p className={styles.author}>
          — Carl Sagan
        </p>

      </div>

      <div className={styles.bottom}>

        <p>© Prajna Ranganath</p>

        <p>Designed and developed by Prajna Ranganath</p>

      </div>

    </footer>

  );

}