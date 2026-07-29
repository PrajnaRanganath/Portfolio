import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>

      <div className={styles.headingRow}>

        <div className={styles.number}>
          <span className={styles.zero}>0</span>
          <span className={styles.one}>1.</span>
        </div>

        <h2 className={styles.heading}>About</h2>

        <div className={styles.line}></div>

      </div>

      <div className={styles.text}>

        <p>
          I am an Electronics and Communication Engineering graduate
          specializing in Cyber Physical Systems, with a strong interest in
          robotics, intelligent control systems and autonomous machines. I am
          fascinated by how automatons perceive reality and interact with the
          physical world through the integration of sensing, computation and
          control.
        </p>

        <p>
          My academic journey has provided me with experience in embedded
          systems, robotics, computer vision and machine learning which allows
          me to approach engineering problems from both hardware and software
          perspectives. My interests lie at the intersection of perception and
          control, which enables me to have a multidisciplinary approach to
          engineering and research.
        </p>

        <p>
          I aspire to contribute to research in autonomous robotics and to
          develop intelligent technologies that solve meaningful real world
          challenges.
        </p>

      </div>

    </section>
  );
}