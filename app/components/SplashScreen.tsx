"use client";

import { useEffect, useState } from "react";
import styles from "./SplashScreen.module.css";

export default function SplashScreen() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.splash} ${
        hide ? styles.fadeOut : ""
      }`}
    >
      <h1 className={styles.logo}>pr</h1>
    </div>
  );
}