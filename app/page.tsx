"use client";

import React from "react";
import styles from "./page.module.css";

const Home = () => {
  const views = {
    // "Basic chat": "basic-chat",
    // "Function calling": "function-calling",
    // "File search": "file-search",
    "Тест #1": "v1",
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        Explore sample apps built with Assistants API
      </div>
      <div className={styles.container}>
        {Object.entries(views).map(([name, url]) => (
          <a key={name} className={styles.category} href={`/chats/${url}`}>
            {name}
          </a>
        ))}
      </div>
    </main>
  );
};

export default Home;
