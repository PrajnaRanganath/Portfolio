"use client";

import { useState } from "react";
import styles from "./Experience.module.css";
import { ArrowRightCircle } from "lucide-react";

const experiences = [
  {
    id: 1,
    organization: "Cornell University",
    title: "Research Intern",
    duration: "Feb 2026 – Jun 2026",
    subtitle: "College of Agriculture and Life Sciences (CALS)",
    description: [
      "Assisted in the development of robotic systems for agricultural applications within the College of Agriculture and Life Sciences (CALS).",
      "Contributed to control systems, sensor integration, and computer vision pipelines for environmental and crop analysis.",
    ],
  },
  {
    id: 2,
    organization: "SASTRA Deemed University",
    title: "Bachelor of Technology",
    duration: "Jul 2022 – Jul 2026",
    subtitle:
      "Electronics and Communication Engineering (Cyber Physical Systems)",
    description: [
      "Graduated with a specialization in Cyber Physical Systems.",
      "Focused on embedded systems, robotics, artificial intelligence, computer vision, and IoT through coursework and projects.",
    ],
  },
  {
    id: 3,
    organization: "TECS (The Electronics Club of SASTRA)",
    title: "Core Member",
    duration: "Jul 2023 – Jul 2026",
    subtitle: "Electronics Club",
    description: [
      "Organized electronics workshops and technical events.",
      "Participated in club activities promoting electronics among students.",
    ],
  },
  {
    id: 4,
    organization: "DAKSH",
    title: "Core Member",
    duration: "Jul 2023 – Jul 2025",
    subtitle: "SASTRA's Techno-Cultural Fest",
    description: [
      "Coordinated logistics and resource management for the university's largest techno-cultural festivals.",
      "Collaborated with cross-functional teams to ensure smooth event execution.",
    ],
  },
];

export default function Experience() {
  const [openExperiences, setOpenExperiences] = useState<number[]>([]);

const toggleExperience = (id: number) => {
  setOpenExperiences((prev) =>
    prev.includes(id)
      ? prev.filter((experienceId) => experienceId !== id)
      : [...prev, id]
  );
};

  return (
    <section id="experience" className={styles.experience}>
      {/* ---------- Heading ---------- */}

      <div className={styles.headingRow}>
        <div className={styles.number}>
          <span className={styles.zero}>0</span>
          <span className={styles.five}>5.</span>
        </div>

        <h2 className={styles.heading}>Experience</h2>

        <div className={styles.line}></div>
      </div>

      <p className={styles.description}>
      </p>

      {/* ---------- Experience List ---------- */}

      <div className={styles.experienceList}>
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className={styles.experienceWrapper}
          >
            {/* ---------- Row ---------- */}

            <div className={styles.experienceRow}>
              <div className={styles.experienceText}>
                <div className={styles.topRow}>
                  <h3>{experience.title}</h3>

                  <span className={styles.duration}>
                    {experience.duration}
                  </span>
                </div>

                <h4>{experience.organization}</h4>
                <p className={styles.subtitle}>
                   {experience.subtitle}
                </p>

                <p>{experience.subtitle}</p>
              </div>

              <button
                className={styles.arrowButton}
                onClick={() => toggleExperience(experience.id)}
              >
                <ArrowRightCircle
                  className={
                    openExperiences.includes(experience.id)
                      ? `${styles.arrow} ${styles.arrowOpen}`
                      : styles.arrow
                  }
                />
              </button>
            </div>

            {/* ---------- Expandable Content ---------- */}

            <div
              className={
                openExperiences.includes(experience.id)
                  ? `${styles.expand} ${styles.expandOpen}`
                  : styles.expand
              }
            >
              <div className={styles.experiencePage}>
                <h2>{experience.title}</h2>

                <h3>{experience.organization}</h3>

                <span className={styles.pageDuration}>
                  {experience.duration}
                </span>

                <ul className={styles.points}>
                  {experience.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}