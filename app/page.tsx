"use client";

import React from "react";
import styles from "./page.module.css";
import {bots} from "@/app/bots";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        DIBD Assistants API
      </div>
      <div className={styles.container}>
        {bots.map((variant) => (
          <a key={variant.localId} className={styles.category} href={`/bots/${variant.localId}`}>
            {variant.name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
