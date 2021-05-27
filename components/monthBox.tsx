import styles from "./monthBox.module.css"
import Task from "./task"

type MonthProps = {
  monthNumber: number;
  children: any;
}
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export default function MonthBox({monthNumber, children}: MonthProps) {
  return (
    <div>
      <h3 className={styles.title}>{months[monthNumber]}</h3>
      {children}
    </div>
  )
  
}