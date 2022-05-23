import React from "react";
import styles from "../styles/Menulink.module.css";

export default function MenuLink({ icon, text }) {
  return (
    <div className={styles.menuLink}>
      {icon}
      <span className={styles.menuLinkText}>{text}</span>
      <span className={styles.menuLinkTextName}>
        {text === "Logout" && "( John )"}
      </span>
    </div>
  );
}