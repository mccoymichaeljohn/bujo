import Head from "next/head";
import React from "react";
import {  AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import DayBox from "../components/dayBox";
import Layout from "../components/layout";
import Task, { TaskType } from "../components/task";
import styles from '../styles/Week.module.scss'

function CreateDays() {
  let days = [];
  for (let i = 0; i < 8; i++ ) {
    let className = styles.gridItem;
    if ((i+1) % 4 != 0) className += ` ${styles.sideBorder}`
    if (i / 4 < 1) className += ` ${styles.bottomBorder}`
    days.push(<div className={className}><DayBox dayNumber={i} >
      <div className={styles.task}><Task type={TaskType.ToDo} text = "test"></Task></div>
      <div className={styles.task}><Task type={TaskType.Event} text = "test2"></Task></div>
      </DayBox></div>)
  }
  return days;
}

export default function Week() {
  return(
    <Layout>
      <Head>
        <title>Week</title>
      </Head>
      <main>
        <h1>
          <AiFillCaretLeft className={styles.icon} />
          Jan. 03 - 09
          <AiFillCaretRight className={styles.icon}/>
        </h1>
        <div className={styles.container}>
          {CreateDays()}
        </div>
        
      </main>
    </Layout>
  )
}