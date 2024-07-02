import { useAppSelector } from "../redux/hooks";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useAppSelector((state) => state);
  const copy = [...tasks];
  copy?.sort((a, b) => {
    const taskA = a.value.toUpperCase();
    const taskB = b.value.toUpperCase();
    if (taskA > taskB) return 1;
    if (taskB > taskA) return -1;
    return 0;
  });
  return (
    <div
      className="
      flex 
      flex-col 
      h-[25rem] 
      gap-5 
      items-center
      p-5"
    >
      <h1 className="text-3xl font-medium">Tasks</h1>
      <ul className=" list-decimal  w-full max-w-[25rem] border h-full overflow-auto">
        {copy?.map((task, index) => (
          <Task task={task} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
