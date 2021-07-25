import {AiFillCaretDown} from "react-icons/ai"
import Layout from '../components/layout'
import MonthBox from '../components/monthBox'
import styles from '../styles/FutureLog.module.scss'
import Task, { TaskType } from '../components/task'
import React from "react"
import Head from "next/head"

function CreateMonths() {
  let months = [];
  for (let i = 0; i < 12; i++ ) {
    let className = styles.gridItem;
    if ((i+1) % 4 != 0) className += ` ${styles.sideBorder}`
    if (i / 4 < 2) className += ` ${styles.bottomBorder}`
    months.push(<div className={className}><MonthBox monthNumber={i} >
      <div className={styles.task}><Task type={TaskType.ToDo} text = "test"></Task></div>
      <div className={styles.task}><Task type={TaskType.Event} text = "test2"></Task></div>
      </MonthBox></div>)
  }
  return months;
}

export default function FutureLog() {
  return(
    <Layout>
      <Head>
        <title>Future Log</title>
      </Head>
      <main>
      <h1>Future Log</h1>
      <h2>
        2021 <AiFillCaretDown className={styles.icon}/>
      </h2>
      <div className={styles.container}>
      {CreateMonths()}
      </div>
      
      </main>
      
    </Layout>
  ) 
}