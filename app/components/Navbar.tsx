"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setSticky(window.scrollY > 34);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (

    <>

      <nav className={`${styles.navbar} ${sticky ? styles.sticky : ""}`}>

        {/* Logo */}

        <Link href="#hero" className={styles.logoBox} onClick={closeMenu}>
          <span className={styles.logoText}>pr</span>
        </Link>

        {/* Desktop Navigation */}

        <div className={styles.navLinks}>

          <Link href="#about">About</Link>

          <Link href="#interests">Interests</Link>

          <Link href="#projects">Projects</Link>

          <Link href="#publications">Publications</Link>

          <Link href="#experience">Experience</Link>

          <Link href="#contact">Contact</Link>

        </div>

        {/* Hamburger */}

        <button
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >

          <span></span>
          <span></span>
          <span></span>

        </button>

      </nav>

      {/* Mobile Menu */}

      <div
        className={`${styles.mobileMenu} ${menuOpen ? styles.showMenu : ""}`}
      >

        <Link href="#about" onClick={closeMenu}>About</Link>

        <Link href="#interests" onClick={closeMenu}>Interests</Link>

        <Link href="#projects" onClick={closeMenu}>Projects</Link>

        <Link href="#publications" onClick={closeMenu}>Publications</Link>

        <Link href="#experience" onClick={closeMenu}>Experience</Link>

        <Link href="#contact" onClick={closeMenu}>Contact</Link>

      </div>

    </>

  );

}