import Head from "next/head";
import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import Layout from "../components/layout";
import Task, { TaskType } from "../components/task";
import styles from '../styles/Month.module.scss';

function CreateDates() {
  let dates = [];
  let daysOfWeek = ["S", "M", "T", "W", "T", "F", "S"];
  for (let i = 1; i <= 31; i++ ) {
    dates.push(<p className={styles.date}>{i} {daysOfWeek[i%7]}</p>)
  }
  return dates;
}

export default function Month() {
  return(
    <Layout>
      <Head>
        <title>Month</title>
      </Head>
      <main>
      <h1>
        <AiFillCaretLeft className={styles.icon} />
          January 2021
        <AiFillCaretRight className={styles.icon}/>
      </h1>
      <div className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Dates</h2>
          <div>{CreateDates()}</div>
         
        </section>
        <section className={styles.section}>
          <h2 className={styles.sectionHeader}>Goals</h2>
          <div className={styles.task}><Task type={TaskType.ToDo} text = "test"></Task></div>
        </section>
      </div>

      </main>
    </Layout>
  )
}