import Image from "next/image";
import React from "react";
import styles from "./Navbar.module.css";
import qrgpf from "../public/qrgpf.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Image src={qrgpf} className={styles.logo} />
    </nav>
  );
};

export default Navbar;
