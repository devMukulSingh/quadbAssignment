import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Itask, setTasks } from "../redux/slice";
import { Edit, Trash } from "lucide-react";
import Dialog from "./Dialog";

type Props = {
  task: Itask;
};

const Task = ({ task }: Props) => {
  const [openDialog, setOpenDialog] = useState(false);
  const dispatch = useAppDispatch();
  const { tasks } = useAppSelector((state) => state);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      const completedTask = {
        ...task,
        completed: true,
      };
      //removing the particular task from the state
      const filteredTask = tasks.filter((item) => item.id !== task.id);
      //, and then adding a new task in the state, in which completed=true
      dispatch(setTasks([completedTask, ...filteredTask]));
    } else {
      const pendingTask = {
        ...task,
        completed: false,
      };
      //removing the particular task from the state
      const filteredTask = tasks.filter((item) => item.id !== task.id);
      //, and then adding a new task in the state, in which completed=false
      dispatch(setTasks([pendingTask, ...filteredTask]));
    }
  };
  const handleDelete = () => {
    const filteredTask = tasks.filter((item) => item.id !== task.id);
    dispatch(setTasks(filteredTask));
  };

  return (
    <>
      {openDialog && <Dialog setOpenDialog={setOpenDialog} task={task} />}
      <div className="flex items-center gap-3 pl-3 pr-2 py-3 ">
        <div className="rounded-md flex w-full gap-3 items-center  ">
          <input
            className="size-5 cursor-pointer"
            checked={task.completed}
            type="checkbox"
            id={`task.${task.id}`}
            onChange={(e) => handleChange(e)}
          />
          <label
            htmlFor={`task.${task.id}`}
            className={`break-words ${task.completed ? "line-through" : ""}`}
          >
            {task.value}
          </label>
        </div>
        <Edit onClick={() => setOpenDialog(true)} className="cursor-pointer" />
        <Trash
          onClick={handleDelete}
          className="cursor-pointer size-6 font-light"
        />
      </div>
      <hr />
    </>
  );
};

export default Task;
