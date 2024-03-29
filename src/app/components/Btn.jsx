import React from "react";
import styles from "./_Btn.module.scss";
import Link from "next/link";

function Btn({href, title, textColor, textShadow, border}) {
  return (
    <Link href={href} className={styles.btn} style={{color: textColor, textShadow: textShadow, border: border}}>
        {title}
    </Link>
  );
}

export default Btn;
