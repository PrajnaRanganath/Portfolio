import styles from "./Contact.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>

      <div className={styles.headingRow}>

        <div className={styles.number}>
          <span className={styles.zero}>0</span>
          <span className={styles.six}>6.</span>
        </div>

        <h2 className={styles.heading}>Contact</h2>

        <div className={styles.line}></div>

      </div>

      <div className={styles.content}>

        <div className={styles.photo}>
          <img
            src="/images/profile.jpeg"
            alt="Profile"
          />
        </div>

        <div className={styles.info}>

          <p className={styles.intro}>
            Thank you for taking the time to explore my portfolio.
          </p>

          <p className={styles.body}>
            I am open to new opportunities and collaborations. If you would
            like to discuss a project, research opportunity, or simply connect,
            don't hesitate to get in touch.
          </p>

          <div className={styles.location}>
            <HiOutlineLocationMarker />
            <span>Bengaluru, Karnataka, India</span>
          </div>

          <a
            href="/CV.pdf"
            className={styles.cv}
            download
          >
            [Download CV]
          </a>

          <div className={styles.socials}>

            <a
              href="https://github.com/PrajnaRanganath"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/prajna-ranganath"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
             href="mailto:prajnaranganath@gmail.com"
             className={styles.contactLink}
        >
            <HiOutlineMail />
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}