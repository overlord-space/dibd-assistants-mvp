"use client";

import React, {useState} from "react";
import styles from "./page.module.css";
import Chat from "../../components/chat";
import {bots} from "@/app/bots";
import FileViewer from "@/app/components/file-viewer";

const FunctionCalling = ({params: {botId}}) => {
    // Find the bot variant from the bots array
    const bot = bots.find(b => b.localId === botId);

    // If bot variant is not found, return an error message or a default component
    if (!bot) {
        return <div>Bot variant not found</div>;
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/*<div className={styles.fileViewer}>
                    <FileViewer bot={bot} />
                </div>*/}
                <div className={styles.chatContainer}>
                    <br/>
                    <h1>{bot.name}</h1>
                    <p>{bot.description}</p>

                    <div className={styles.chat}>
                        <Chat bot={bot}/>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default FunctionCalling;
