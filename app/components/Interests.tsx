import styles from "./Interests.module.css";
import { Navigation, Wrench, Eye, Cpu } from "lucide-react";

const interests = [
  {
    title: "ROBOTICS",
    icon: Navigation,
    description:
      "Designing autonomous robotic systems through perception, planning and control.",
    skills: "ROS • ROS2 • Gazebo • Motion Planning • Navigation",
  },
  {
    title: "CONTROL SYSTEMS",
    icon: Wrench,
    description:
      "Developing robust control algorithms for dynamic systems and autonomous machines.",
    skills: "PID • Fuzzy Control • MATLAB/Simulink • System Identification",
  },
  {
    title: "COMPUTER VISION",
    icon: Eye,
    description:
      "Building visual perception systems for robotic understanding and autonomous decision making.",
    skills: "OpenCV • PyTorch • YOLO • DETR • Vision Transformers",
  },
  {
    title: "EMBEDDED SYSTEMS",
    icon: Cpu,
    description:
      "Integrating hardware and software to create intelligent real-time systems.",
    skills:
      "ESP32 • STM32 • Arduino • KiCad • Sensor Fusion • Real-Time Systems",
  },
];

export default function Interests() {
  return (
    <section id="interests" className={styles.interests}>
      {/* Heading */}
      <div className={styles.headingRow}>
        <div className={styles.number}>
          <span className={styles.zero}>0</span>
          <span className={styles.two}>2.</span>
        </div>

        <h2 className={styles.heading}>Interests</h2>

        <div className={styles.line}></div>
      </div>

      {/* Cards */}
      <div className={styles.grid}>
        {interests.map((item) => {
          const Icon = item.icon;

          return (
            <div className={styles.card} key={item.title}>
              <div className={styles.cardHeader}>
                <h3>{item.title}</h3>
                <Icon className={styles.icon} />
              </div>

              <div className={styles.yellowLine}></div>

              <p className={styles.description}>{item.description}</p>

              <p className={styles.skills}>{item.skills}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}