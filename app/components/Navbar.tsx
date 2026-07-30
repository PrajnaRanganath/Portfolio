"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {

  const [sticky, setSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

const navLink = (section: string) =>
  pathname === "/" ? `#${section}` : `/#${section}`;

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

<Link
  href={pathname === "/" ? "#hero" : "/#hero"}
  className={styles.logoBox}
  onClick={closeMenu}
>
  <span className={styles.logoText}>pr</span>
</Link>

        {/* Desktop Navigation */}

        <div className={styles.navLinks}>

<Link href={navLink("about")}>About</Link>

<Link href={navLink("interests")}>Interests</Link>

<Link href={navLink("projects")}>Projects</Link>

<Link href={navLink("publications")}>Publications</Link>

<Link href={navLink("experience")}>Experience</Link>

<Link href={navLink("contact")}>Contact</Link>

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

<Link href={navLink("about")} onClick={closeMenu}>About</Link>

<Link href={navLink("interests")} onClick={closeMenu}>Interests</Link>

<Link href={navLink("projects")} onClick={closeMenu}>Projects</Link>

<Link href={navLink("publications")} onClick={closeMenu}>Publications</Link>

<Link href={navLink("experience")} onClick={closeMenu}>Experience</Link>

<Link href={navLink("contact")} onClick={closeMenu}>Contact</Link>

      </div>

    </>

  );

}