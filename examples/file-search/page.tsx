"use client";
import React from "react";
import styles from "../../app/bots/shared/page.module.css";

import Chat from "../../app/components/chat";
import FileViewer from "../../app/components/file-viewer";

const FileSearchPage = () => {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.column}>
          <FileViewer />
        </div>
        <div className={styles.chatContainer}>
          <div className={styles.chat}>
            <Chat />
          </div>
        </div>
      </div>
    </main>
  );
};

export default FileSearchPage;
