"use client";

import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { ArrowRightCircle } from "lucide-react";
import NavigationSandbox from "./NavigationSandbox/NavigationSandbox";
import LidarViewer from "./lidar/LidarViewer";
import pidImage from "@/public/images/PID.png";

const projects = [
  {
    id: 1,
    title: "Autonomous Robot Navigation and Path Planning",
    subtitle: "ROS • ROS2 • Gazebo • RViz • A* Navigation",
  },
  {
    id: 2,
    title: "Dynamic PID Controller for DC Motor Speed Control",
    subtitle: "ESP32 • Hall Encoder • MATLAB/Simulink • Fuzzy Logic",
  },
  {
    id: 3,
    title: "LiDAR-Based Environmental Mapping and Perception",
    subtitle:
      "LiDAR • ROS • RViz • Mapping • Sensor Fusion • Point Cloud Processing",
  },
  {
    id: 4,
    title: "IoT-Based Red Palm Weevil Detection System",
    subtitle:
      "Computer Vision • Embedded AI • CNN • Transformer • IoT",
  },
  {
    id: 5,
    title: "Metaheuristic Optimization for Engineering Applications",
    subtitle:
      "Grey Wolf Optimizer • Black Widow Optimization • Swarm Intelligence",
  },
  {
    id: 6,
    title: "Embedded Network Monitoring and Communication System",
    subtitle:
      "ESP32 • STM32 • MQTT • TCP/IP • Embedded Networking",
  },
];

export default function Projects() {
  const [openProjects, setOpenProjects] = useState<number[]>([]);

  /*
   * ============================================================
   * ACCORDION SWITCHING LOGIC
   *
   * If another project is open:
   *
   * 1. Close current project
   * 2. Wait for closing animation
   * 3. Center the newly clicked project row
   * 4. Wait for scrolling
   * 5. Open the new project
   *
   * This prevents the new project from jumping because the
   * previous project is collapsing above it.
   * ============================================================
   */

const toggleProject = (id: number) => {
  setOpenProjects((prev) =>
    prev.includes(id)
      ? prev.filter((projectId) => projectId !== id)
      : [...prev, id]
  );
};

  /*
   * ============================================================
   * AFTER OLD PROJECT CLOSES
   * ============================================================
   */

  return (
    <section id="projects" className={styles.projects}>
      {/* ======================================================
                            HEADING
      ====================================================== */}

      <div className={styles.headingRow}>
        <div className={styles.number}>
          <span className={styles.zero}>0</span>
          <span className={styles.three}>3.</span>
        </div>

        <h2 className={styles.heading}>Projects</h2>

        <div className={styles.line}></div>
      </div>

      <p className={styles.description}>
        The projects below showcase my featured work across robotics,
        embedded systems, computer vision, and intelligent control,
        highlighting my approach to designing intelligent and autonomous
        systems.
      </p>

      {/* ======================================================
                        PROJECT ACCORDION
      ====================================================== */}

      <div className={styles.projectList}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectWrapper}
          >
            {/* ==================================================
                              PROJECT ROW
            ================================================== */}

            <div
              className={styles.projectRow}
              data-project-id={project.id}
            >
              <div className={styles.projectText}>
                <h3>{project.title}</h3>
                <p>{project.subtitle}</p>
              </div>

              <button
                className={styles.arrowButton}
                onClick={() => toggleProject(project.id)}
                aria-label={
                  openProjects.includes(project.id)
                    ? `Close ${project.title}`
                    : `Open ${project.title}`
                }
              >
                <ArrowRightCircle
                  className={
                    openProjects.includes(project.id)
                      ? `${styles.arrow} ${styles.arrowOpen}`
                      : styles.arrow
                  }
                />
              </button>
            </div>

            {/* ==================================================
                            EXPANDABLE CONTENT
            ================================================== */}

            <div
              className={
                openProjects.includes(project.id)
                  ? `${styles.expand} ${styles.expandOpen}`
                  : styles.expand
              }
            >
              <div className={styles.projectPage}>

                {/* ==================================================
                              PROJECT 1
                ================================================== */}

                {project.id === 1 ? (
                  <div className={styles.projectLayout}>
                    <div className={styles.projectHero}>
                      <h2>
                        Autonomous Robot Navigation and Path Planning
                      </h2>

                      <p className={styles.projectIntro}>
                        This project investigates autonomous robot navigation
                        through graph-based path planning, enabling a mobile
                        robot to determine collision-free trajectories within
                        known environments. The underlying system is designed
                        around the principles of autonomous navigation used in
                        modern robotic platforms, combining environment
                        representation, path planning, and visualization into a
                        modular framework.

                        <br />
                        <br />

                        The interactive sandbox presented on this website
                        demonstrates the core concepts of the A* search
                        algorithm within a simplified occupancy-grid
                        environment. The complete project extends beyond this
                        demonstration and is intended to incorporate simulation,
                        mapping, localization, and autonomous navigation
                        capabilities using the ROS2 ecosystem.
                      </p>
                    </div>

                    <div className={styles.projectColumns}>
                      <div className={styles.projectContent}>
                        <div className={styles.infoSection}>
                          <h3>Objectives</h3>

                          <ul>
                            <li>
                              Design a modular navigation framework for
                              autonomous mobile robots.
                            </li>

                            <li>
                              Develop an occupancy-grid representation for
                              modelling known environments and obstacles.
                            </li>

                            <li>
                              Implement graph-search algorithms, including A*,
                              for optimal and collision-free path planning.
                            </li>

                            <li>
                              Evaluate path-planning performance in terms of
                              path optimality, computational efficiency, and
                              obstacle avoidance.
                            </li>

                            <li>
                              Develop a scalable architecture for integration
                              with localization, mapping, and SLAM-based
                              autonomous navigation systems.
                            </li>
                          </ul>
                        </div>

                        <div className={styles.mobileSandbox}>
                          <NavigationSandbox />
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Technology Stack</h3>

                          <p>
                            ROS2 • Gazebo • RViz • A* Search • Occupancy Grid
                            Mapping • C++ • Python
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Features</h3>

                          <ul>
                            <li>
                              Autonomous global path planning using
                              graph-search algorithms.
                            </li>

                            <li>
                              Collision-free trajectory generation within
                              obstacle-constrained environments.
                            </li>

                            <li>
                              Occupancy-grid based environment modelling for
                              robotic navigation.
                            </li>

                            <li>
                              Modular navigation architecture supporting
                              independent planning and decision-making
                              components.
                            </li>

                            <li>
                              Extensible framework designed for integration
                              with localization, mapping, and SLAM pipelines.
                            </li>

                            <li>
                              Simulation-ready architecture compatible with
                              modern robotic development environments.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className={styles.projectSidebar}>
                        <div className={styles.desktopSandbox}>
                          <NavigationSandbox />
                        </div>

                        <div className={styles.infoSection}>
                          <h3>GitHub Repository</h3>

                          <p>
                            The complete source code, documentation and future
                            improvements will be available in the GitHub
                            repository.
                          </p>

                          <a
                            href="https://github.com/PrajnaRanganath/Autonomous_Robot_Navigation"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubButton}
                          >
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* ==================================================
                              PROJECT 2
                ================================================== */}

                {project.id === 2 ? (
                  <div className={styles.projectLayout}>
                    <div className={styles.projectHero}>
                      <h2>
                        Dynamic PID Controller for DC Motor Speed Control
                      </h2>

                      <p className={styles.projectIntro}>
                        This project investigates intelligent closed-loop speed
                        control for permanent magnet DC motors through the
                        design and evaluation of adaptive control strategies.
                        The objective is to achieve precise speed regulation
                        under varying operating conditions by combining
                        classical control theory with intelligent tuning
                        techniques.

                        <br />
                        <br />

                        The implementation extends beyond conventional PID
                        control by incorporating adaptive gain tuning,
                        encoder-based feedback, system modelling, and
                        experimental validation. The complete project is
                        intended to provide a modular control framework that
                        can serve as a foundation for advanced motion-control
                        and robotic drive applications.
                      </p>
                    </div>

                    <div className={styles.projectColumns}>
                      <div className={styles.projectContent}>
                        <div className={styles.infoSection}>
                          <h3>Objectives</h3>

                          <ul>
                            <li>
                              Develop a mathematical model of the DC motor and
                              drive system.
                            </li>

                            <li>
                              Design and implement adaptive PID controllers for
                              closed-loop speed regulation.
                            </li>

                            <li>
                              Integrate high-resolution encoder feedback for
                              real-time control.
                            </li>

                            <li>
                              Evaluate controller robustness under varying load
                              disturbances and operating conditions.
                            </li>

                            <li>
                              Establish a scalable platform for future
                              intelligent control and robotic actuator research.
                            </li>
                          </ul>
                        </div>

                        <div className={styles.mobileSandbox}>
                          <img
                            src={pidImage.src}
                            alt="Dynamic PID Controller"
                            className={styles.projectImage}
                          />

                          <p className={styles.imageCaption}>
                            Embedded Hardware Architecture for Closed-Loop DC
                            Motor Speed Control
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Technology Stack</h3>

                          <p>
                            ESP32 • Hall Effect Encoder • MATLAB • Simulink •
                            Embedded C • PID Control • Adaptive Control • Fuzzy
                            Logic • System Identification
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Features</h3>

                          <ul>
                            <li>
                              Closed-loop motor speed regulation using encoder
                              feedback.
                            </li>

                            <li>
                              Adaptive gain tuning for improved transient and
                              steady-state performance.
                            </li>

                            <li>
                              Real-time embedded controller implementation on
                              ESP32.
                            </li>

                            <li>
                              Comparative evaluation of conventional and
                              intelligent control strategies.
                            </li>

                            <li>
                              Modular software architecture supporting future
                              control algorithm integration.
                            </li>

                            <li>
                              Experimental validation through
                              hardware-in-the-loop testing.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className={styles.projectSidebar}>
                        <div className={styles.desktopSandbox}>
                          <img
                            src={pidImage.src}
                            alt="Dynamic PID Controller"
                            className={styles.projectImage}
                          />

                          <p className={styles.imageCaption}>
                            Embedded Hardware Architecture for Closed-Loop DC
                            Motor Speed Control
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>GitHub Repository</h3>

                          <p>
                            The complete source code, documentation and future
                            improvements will be available in the GitHub
                            repository.
                          </p>

                          <a
                            href="https://github.com/PrajnaRanganath/Dynamic_PID_Controller"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubButton}
                          >
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* ==================================================
                              PROJECT 3
                ================================================== */}

                {project.id === 3 ? (
                  <div className={styles.projectLayout}>
                    <div className={styles.projectHero}>
                      <h2>
                        LiDAR-Based Environmental Mapping and Perception
                      </h2>

                      <p className={styles.projectIntro}>
                        This project focuses on the development of a LiDAR-based
                        perception pipeline for autonomous robotic systems,
                        enabling the processing of three-dimensional sensor
                        data to identify and interpret objects within a
                        surrounding environment. The system combines
                        point-cloud processing, ground removal, voxel-based
                        downsampling, clustering, and object-level
                        representation to support robust environmental
                        perception for autonomous navigation.

                        <br />
                        <br />

                        The project is developed as a modular perception
                        framework that can serve as a foundation for
                        integration with broader autonomous navigation systems,
                        including localization, mapping, and planning. The
                        interactive visualization presented on this website is
                        a separate demonstration created to illustrate the
                        underlying point-cloud processing concepts and does not
                        represent the complete implementation or scope of the
                        main robotics project.
                      </p>
                    </div>

                    <div className={styles.projectColumns}>
                      <div className={styles.projectContent}>
                        <div className={styles.infoSection}>
                          <h3>Objectives</h3>

                          <ul>
                            <li>
                              Develop a modular LiDAR perception pipeline for
                              processing and interpreting three-dimensional
                              point-cloud data.
                            </li>

                            <li>
                              Implement point-cloud preprocessing techniques
                              for noise reduction, ground removal, and
                              computationally efficient data representation.
                            </li>

                            <li>
                              Develop spatial clustering methods for separating
                              and identifying distinct objects within LiDAR
                              point clouds.
                            </li>

                            <li>
                              Generate reliable geometric representations of
                              detected objects to support downstream perception
                              and autonomous navigation tasks.
                            </li>

                            <li>
                              Establish a scalable perception architecture
                              suitable for integration with localization,
                              mapping, and autonomous navigation systems.
                            </li>
                          </ul>
                        </div>

                        <div className={styles.mobileSandbox}>
                          <LidarViewer />
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Technology Stack</h3>

                          <p>
                            ROS2 • LiDAR • Point Cloud Processing • C++ • Python
                            • PCL • RViz • 3D Perception
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Features</h3>

                          <ul>
                            <li>
                              LiDAR-based three-dimensional environment
                              perception.
                            </li>

                            <li>
                              Point-cloud preprocessing and noise filtering.
                            </li>

                            <li>
                              Ground-plane removal for improved object
                              separation.
                            </li>

                            <li>
                              Voxel-based point-cloud downsampling for
                              computational efficiency.
                            </li>

                            <li>
                              Spatial clustering for object-level
                              segmentation.
                            </li>

                            <li>
                              Geometric object representation for downstream
                              robotic perception and navigation.
                            </li>

                            <li>
                              Modular architecture designed for integration
                              with broader autonomous navigation pipelines.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className={styles.projectSidebar}>
                        <div className={styles.desktopSandbox}>
                          <LidarViewer />
                        </div>

                        <div className={styles.infoSection}>
                          <h3>GitHub Repository</h3>

                          <p>
                            The complete source code, documentation and future
                            improvements will be available in the GitHub
                            repository.
                          </p>

                          <a
                            href="https://github.com/PrajnaRanganath/Lidar_Environmental_Mapping"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubButton}
                          >
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* ==================================================
                              PROJECT 4
                ================================================== */}

                {project.id === 4 ? (
                  <div className={styles.projectLayout}>
                    <div className={styles.projectHero}>
                      <h2>
                        IoT-Based Red Palm Weevil Detection System
                      </h2>

                      <p className={styles.projectIntro}>
                        This project investigates the use of thermal imaging
                        and deep learning for the detection of Red Palm Weevil
                        infestation, exploring thermal data as a non-invasive
                        approach for identifying infestation-related patterns.
                        Multiple deep-learning architectures, including
                        Convolutional Neural Networks (CNNs), YOLO-based object
                        detection models, and Vision Transformers, were explored
                        to evaluate their suitability for analysing thermal
                        imagery.

                        <br />
                        <br />

                        The project also investigates the deployment of trained
                        models on embedded systems for edge-based inference.
                        This work focuses on the practical transition from
                        model development to resource-constrained deployment,
                        with the aim of enabling efficient AI-based pest
                        detection closer to the sensing platform.
                      </p>
                    </div>

                    <div className={styles.projectColumns}>
                      <div className={styles.projectContent}>
                        <div className={styles.infoSection}>
                          <h3>Objectives</h3>

                          <ul>
                            <li>
                              Investigate thermal imaging as a sensing modality
                              for non-invasive detection of Red Palm Weevil
                              infestation.
                            </li>

                            <li>
                              Develop and evaluate deep-learning approaches for
                              analysing thermal imagery, including CNN-based
                              classification and YOLO-based object detection.
                            </li>

                            <li>
                              Explore Vision Transformer architectures for
                              learning spatial and contextual features from
                              thermal images.
                            </li>

                            <li>
                              Compare different deep-learning paradigms based
                              on their suitability for thermal-image-based pest
                              detection.
                            </li>

                            <li>
                              Investigate the deployment of trained models on
                              embedded systems for real-time edge-based
                              inference.
                            </li>
                          </ul>
                        </div>

                        <div className={styles.mobileSandbox}></div>

                        <div className={styles.infoSection}>
                          <h3>Technology Stack</h3>

                          <p>
                            Thermal Imaging • Python • CNN • YOLO • Vision
                            Transformers • Deep Learning • Embedded AI • Edge
                            Computing • IoT
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Features</h3>

                          <ul>
                            <li>
                              Thermal-image-based detection of Red Palm Weevil
                              infestation.
                            </li>

                            <li>
                              Exploration of CNN-based deep-learning models.
                            </li>

                            <li>
                              YOLO-based object detection for identifying
                              infestation-related patterns.
                            </li>

                            <li>
                              Investigation of Vision Transformer
                              architectures for thermal-image analysis.
                            </li>

                            <li>
                              Comparative exploration of multiple deep-learning
                              approaches.
                            </li>

                            <li>
                              Model deployment and inference on embedded edge
                              platforms.
                            </li>

                            <li>
                              Reduced dependence on cloud-based processing
                              through edge AI.
                            </li>

                            <li>
                              Foundation for autonomous and field-deployable
                              agricultural monitoring.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className={styles.projectSidebar}>
                        <div className={styles.desktopSandbox}></div>

                        <div className={styles.infoSection}>
                          <h3>GitHub Repository</h3>

                          <p>
                            The complete source code, documentation and future
                            improvements will be available in the GitHub
                            repository.
                          </p>

                          <a
                            href="https://github.com/PrajnaRanganath/Thermal_Image_Processing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubButton}
                          >
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* ==================================================
                              PROJECT 5
                ================================================== */}

                {project.id === 5 ? (
                  <div className={styles.projectLayout}>
                    <div className={styles.projectHero}>
                      <h2>
                        Metaheuristic Optimization for Engineering
                        Applications
                      </h2>

                      <p className={styles.projectIntro}>
                        This project explores nature-inspired metaheuristic
                        optimization techniques for obtaining optimal solutions
                        to mathematical optimization problems. The work
                        investigates the underlying swarm mechanisms and search
                        strategies employed by algorithms such as Grey Wolf
                        Optimizer (GWO), Black Widow Optimization (BWO), and
                        Whale Optimization Algorithm (WOA), with a focus on how
                        collective behaviour can be translated into
                        computational optimization strategies.

                        <br />
                        <br />

                        The algorithms were explored through mathematical
                        optimization problems to study their search behaviour
                        and ability to navigate complex solution spaces toward
                        optimal or near-optimal solutions. The project provides
                        insight into the principles of population-based search,
                        exploration and exploitation, and the application of
                        swarm intelligence to computational optimization.
                      </p>
                    </div>

                    <div className={styles.projectColumns}>
                      <div className={styles.projectContent}>
                        <div className={styles.infoSection}>
                          <h3>Objectives</h3>

                          <ul>
                            <li>
                              Explore nature-inspired metaheuristic
                              optimization algorithms for mathematical
                              optimization.
                            </li>

                            <li>
                              Study the swarm mechanisms and computational
                              principles underlying GWO, BWO, and WOA.
                            </li>

                            <li>
                              Investigate how population-based search
                              strategies navigate complex solution spaces.
                            </li>

                            <li>
                              Analyse the balance between exploration and
                              exploitation during optimization.
                            </li>

                            <li>
                              Evaluate the ability of swarm-based algorithms to
                              converge toward optimal or near-optimal
                              solutions.
                            </li>
                          </ul>
                        </div>

                        <div className={styles.mobileSandbox}></div>

                        <div className={styles.infoSection}>
                          <h3>Technology Stack</h3>

                          <p>
                            MATLAB • Python • Metaheuristic Optimization • Swarm
                            Intelligence • GWO • BWO • WOA
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Features</h3>

                          <ul>
                            <li>
                              Exploration of Grey Wolf Optimizer (GWO).
                            </li>

                            <li>
                              Exploration of Black Widow Optimization (BWO).
                            </li>

                            <li>
                              Exploration of Whale Optimization Algorithm
                              (WOA).
                            </li>

                            <li>
                              Mathematical optimization using population-based
                              search.
                            </li>

                            <li>
                              Study of swarm intelligence and collective
                              behaviour.
                            </li>

                            <li>
                              Exploration of exploration–exploitation
                              mechanisms.
                            </li>

                            <li>
                              Analysis of optimization and convergence
                              behaviour.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className={styles.projectSidebar}>
                        <div className={styles.desktopSandbox}></div>

                        <div className={styles.infoSection}>
                          <h3>GitHub Repository</h3>

                          <p>
                            The complete source code, documentation and future
                            improvements will be available in the GitHub
                            repository.
                          </p>

                          <a
                            href="https://github.com/PrajnaRanganath/Optimization_Models"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubButton}
                          >
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

                {/* ==================================================
                              PROJECT 6
                ================================================== */}

                {project.id === 6 ? (
                  <div className={styles.projectLayout}>
                    <div className={styles.projectHero}>
                      <h2>
                        Embedded Network Monitoring and Communication System
                      </h2>

                      <p className={styles.projectIntro}>
                        This project presents an embedded network monitoring
                        and communication system developed around ESP32-based
                        wireless nodes. The system enables reliable data
                        exchange between connected embedded devices while
                        providing visibility into network-level communication
                        and performance. Network traffic was captured and
                        analyzed using Wireshark to examine packet flow,
                        communication behavior, latency, throughput, and packet
                        loss. The project combines embedded programming,
                        wireless networking, and packet-level analysis to
                        develop a modular foundation for monitoring distributed
                        cyber-physical systems.
                      </p>
                    </div>

                    <div className={styles.projectColumns}>
                      <div className={styles.projectContent}>
                        <div className={styles.infoSection}>
                          <h3>Objectives</h3>

                          <ul>
                            <li>
                              Develop an ESP32-based wireless communication
                              system for reliable data exchange between
                              embedded nodes.
                            </li>

                            <li>
                              Implement a structured communication framework
                              for transmitting and receiving data across a
                              local network.
                            </li>

                            <li>
                              Monitor and analyze network traffic using
                              Wireshark and packet-level inspection techniques.
                            </li>

                            <li>
                              Evaluate communication performance through
                              latency, throughput, packet loss, and connection
                              stability.
                            </li>

                            <li>
                              Develop a modular architecture that can be
                              extended to distributed embedded and
                              cyber-physical systems.
                            </li>
                          </ul>
                        </div>

                        <div className={styles.mobileSandbox}></div>

                        <div className={styles.infoSection}>
                          <h3>Technology Stack</h3>

                          <p>
                            ESP32 • Wi-Fi • TCP/IP • MQTT • Wireshark • Embedded
                            C/C++ • Network Monitoring • Packet Analysis
                          </p>
                        </div>

                        <div className={styles.infoSection}>
                          <h3>Features</h3>

                          <ul>
                            <li>
                              ESP32-based wireless communication between
                              distributed embedded nodes.
                            </li>

                            <li>
                              Real-time bidirectional data transmission over a
                              Wi-Fi network.
                            </li>

                            <li>
                              MQTT-based messaging for structured
                              device-to-device communication.
                            </li>

                            <li>
                              Network packet capture and protocol-level
                              analysis using Wireshark.
                            </li>

                            <li>
                              Monitoring of latency, throughput, packet loss,
                              and communication reliability.
                            </li>

                            <li>
                              Identification and analysis of network-level
                              communication behavior.
                            </li>

                            <li>
                              Modular architecture supporting scalable
                              multi-node embedded deployments.
                            </li>

                            <li>
                              Foundation for networked robotic and
                              cyber-physical applications.
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className={styles.projectSidebar}>
                        <div className={styles.desktopSandbox}></div>

                        <div className={styles.infoSection}>
                          <h3>GitHub Repository</h3>

                          <p>
                            The complete source code, documentation and future
                            improvements will be available in the GitHub
                            repository.
                          </p>

                          <a
                            href="https://github.com/PrajnaRanganath/Network_Monitoring"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.githubButton}
                          >
                            View Repository →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : null}

              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}