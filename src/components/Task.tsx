import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Itask, setTasks } from "../redux/slice";
import {  Trash } from "lucide-react";

type Props = {
  task: Itask;
};

const Task = ({ task }: Props) => {
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const completedTask = {
        ...task,
        completed: true,
      };
      const filteredTask = tasks.filter((item) => item.id !== task.id);
      dispatch(setTasks([completedTask, ...filteredTask]));
    } else {
      const pendingTask = {
        ...task,
        completed: false,
      };
      const filteredTask = tasks.filter((item) => item.id !== task.id);
      dispatch(setTasks([pendingTask, ...filteredTask]));
    }
  };
  const handleDelete = () => {
    const filteredTask = tasks.filter((item) => item.id !== task.id);
    dispatch(setTasks(filteredTask));
  };
  return (
    <div className="flex items-center gap-5 pl-5 pr-2 py-3 ">
      <div className="rounded-md justify-between flex w-full gap-10 items-center ">
        <label
          htmlFor={`task.${task.id}`}
          className={`break-words ${task.completed ? "line-through" : ""}`}
        >
          {task.value}
        </label>
        <input
        className="size-5 cursor-pointer"
          checked={task.completed}
          type="checkbox"
          id={`task.${task.id}`}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <Trash
        onClick={handleDelete} 
        className="cursor-pointer size-7 font-light" />
      <hr />
    </div>
  );
};

export default Task;
