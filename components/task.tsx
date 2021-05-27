import {AiFillCaretDown} from "react-icons/ai"

export type TaskProps = {
  type: TaskType;
  text: string;
  className?: string;
}

export enum TaskType {
  ToDo,
  Event
}

function GetIcon(type: TaskType) {
  if (type == TaskType.ToDo) return '\u2022';
  if (type == TaskType.Event) return '\u25CB'
}

export default function Task({type, text}: TaskProps) {
  return <p>{GetIcon(type) +" "+ text}</p>
}