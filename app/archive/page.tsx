"use client";

import Navbar from "@/app/components/Navbar";
import { ArrowUpRight } from "lucide-react";
import styles from "./Archive.module.css";

const projects = [
  {
    title: "Autonomous Robot Navigation and Path Planning",
    tech: "ROS2 • Gazebo • C++ • Python",
    description:
      "Graph-based autonomous navigation using occupancy grid mapping and heuristic path planning.",
    github:
      "https://github.com/PrajnaRanganath/Autonomous_Robot_Navigation",
  },
  {
    title: "Dynamic PID Controller for DC Motor Speed Regulation",
    tech: "ESP32 • STM32 • MATLAB • Simulink",
    description:
      "Adaptive closed-loop motor speed regulation using intelligent control techniques.",
    github:
      "https://github.com/PrajnaRanganath/Dynamic_PID_Controller",
  },
  {
    title: "LiDAR-Based Environmental Mapping and Perception",
    tech: "ROS2 • PCL • RViz • C++ • Python",
    description:
      "Modular 3D point-cloud perception pipeline for autonomous robotic navigation.",
    github:
      "https://github.com/PrajnaRanganath/Lidar_Environmental_Mapping",
  },
  {
    title: "IoT-Based Red Palm Weevil Detection System",
    tech: "Python • CNN • YOLO • Vision Transformer",
    description:
      "Thermal-image-based pest detection with embedded edge deployment.",
    github:
      "https://github.com/PrajnaRanganath/Thermal_Image_Processing",
  },
  {
    title: "Metaheuristic Optimization for Engineering Applications",
    tech:
      "Grey Wolf Optimizer • Black Widow Optimization • Swarm Intelligence",
    description:
      "Metaheuristic optimization techniques for obtaining optimal solutions to mathematical optimization problems.",
    github:
      "https://github.com/PrajnaRanganath/Optimization_Models",
  },
  {
    title: "Embedded Network Monitoring and Communication System",
    tech: "ESP32 • STM32 • MQTT • TCP/IP • Embedded Networking",
    description:
      "Embedded network monitoring and communication system developed around ESP32-based wireless nodes.",
    github:
      "https://github.com/PrajnaRanganath/Network_Monitoring",
  },
  {
    title: "SEGY Seismic Analyzer",
    tech: "Python • NumPy • Matplotlib",
    description:
      "Processing and visualization of seismic data from SEGY files.",
    github:
      "https://github.com/PrajnaRanganath/SEGY_Seismic_Analyzer",
  },
];

export default function Archive() {
  return (
    <>
      <Navbar />

      <main className={styles.archive}>
        <div className={styles.container}>
          {/* Heading */}

          <div className={styles.headingRow}>
            <div className={styles.number}>
              <span>0</span>
              <span className={styles.white}>7.</span>
            </div>

            <h1>Project Archive</h1>

            <div className={styles.line}></div>
          </div>

          <p className={styles.description}></p>

          {/* Projects */}

          <div className={styles.table}>
            <div className={styles.header}>
              <span>Project</span>
              <span>Technologies</span>
              <span>Repository</span>
            </div>

            {projects.map((project) => (
              <div key={project.title} className={styles.card}>
                <div className={styles.projectInfo}>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>

                <div className={styles.tech}>
                  {project.tech}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.github}
                >
                  GitHub <ArrowUpRight size={18} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}