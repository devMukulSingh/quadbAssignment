import { X } from "lucide-react";
import { Itask, setTasks } from "../redux/slice";
import { FormEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import Portal from "./HOC/Portal";
import toast from "react-hot-toast";

type Props = {
  setOpenDialog: (openDialog: boolean) => void;
  task: Itask;
};

const Dialog = ({ setOpenDialog, task }: Props) => {
  const { tasks } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [value, setvalue] = useState(task.value);
  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filteredTask = tasks.filter((item) => item.id !== task.id);
    const newTask = {
      ...task,
      value,
    };
    dispatch(setTasks([...filteredTask, newTask]));
    toast.success('Task updated');
    setOpenDialog(false);
  };
  return (
    <Portal>
      <div className="absolute z-40 w-screen h-screen flex justify-center items-center">
        <div className="ring-2 ring-slate-300 bg-slate-200 flex border px-5 py-3 w-[30rem] h-[18rem] rounded-md flex-col gap-5">
          <div className="flex justify-between">
            <h1 className="text-2xl font-medium">Edit task</h1>
            <X
              onClick={() => setOpenDialog(false)}
              className="size-8 hover:bg-slate-300 transition cursor-pointer ml-auto"
            />
          </div>
          <form
            onSubmit={ handleEdit}
            className="flex flex-col gap-3  border px-3 py-1 rounded-md h-full"
          >
            <label htmlFor="task">Task</label>
            <input

              name="task"
              value={value}
              onChange={(e) => setvalue(e.target.value)}
              placeholder=""
              className="
            px-3 
            py-2 
            rounded-md 
            ring-1
                    ring-neutral-400 
                    focus:outline-none
                    "
            />
            <button
              className="px-5   
                mt-auto
                py-2
                w-fit
                rounded-md
                bg-slate-800
                hover:bg-slate-700
                text-sm
                text-white
                "
            >
              Save changes
            </button>
          </form>
        </div>
      </div>
    </Portal>
  );
};

export default Dialog;
