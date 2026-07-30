"use client";

import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Archive.module.css";

const projects = [
  {
    title: "Autonomous Robot Navigation and Path Planning",
    tech: "ROS2 • Gazebo • C++ • Python",
    description:
      "Graph-based autonomous navigation using occupancy grid mapping and heuristic path planning.",
    github: "#",
  },
  {
    title: "Dynamic PID Controller for DC Motor Speed Regulation",
    tech: "ESP32 • STM32 • MATLAB • Simulink",
    description:
      "Adaptive closed-loop motor speed regulation using intelligent control techniques.",
    github: "#",
  },
  {
    title: "LiDAR-Based Environmental Mapping and Perception",
    tech: "ROS2 • PCL • RViz • C++ • Python",
    description:
      "Modular 3D point-cloud perception pipeline for autonomous robotic navigation.",
    github: "#",
  },
  {
    title: "IoT-Based Red Palm Weevil Detection System",
    tech: "Python • CNN • YOLO • Vision Transformer",
    description:
      "Thermal-image-based pest detection with embedded edge deployment.",
    github: "#",
  },
  {
    title: "Agricultural Robotics Research",
    tech: "ROS • Python • KiCad • Embedded Systems",
    description:
      "Software and embedded hardware developed for precision agriculture research at Cornell University.",
    github: "#",
  },
  {
    title: "Portfolio Website",
    tech: "Next.js • React • TypeScript",
    description:
      "Personal portfolio showcasing research, projects, and technical experience.",
    github: "#",
  },
  {
    title: "SEGY Seismic Analyzer",
    tech: "Python • NumPy • Matplotlib",
    description:
      "Processing and visualization of seismic data from SEGY files.",
    github: "#",
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

          <p className={styles.description}>
            A complete archive of my public robotics, embedded systems,
            autonomous systems, computer vision, and software engineering
            projects.
          </p>

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

                <Link
                  href={project.github}
                  target="_blank"
                  className={styles.github}
                >
                  GitHub <ArrowUpRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}