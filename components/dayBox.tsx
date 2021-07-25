import styles from "./monthBox.module.css"
import Task from "./task"

type DayProps = {
  dayNumber: number;
  children: any;
}
const days = ["This Week", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
export default function DayBox({dayNumber, children}: DayProps) {
  return (
    <div>
      <h3 className={styles.title}>{days[dayNumber]}</h3>
      {children}
    </div>
  )
  
}