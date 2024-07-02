import  { ChangeEvent, FormEvent, useState } from "react";
import { useAppDispatch } from "../redux/hooks";
import { pushPendingTask,  } from "../redux/slice";
import toast from "react-hot-toast";

type task = {
    value:string,
    id:number
} | null

const Form = () => {
  const dispatch = useAppDispatch();
  const initialState = {
    value:"",
    id:0,
    completed:false,
  }
  const [task, setTask] = useState<task>(initialState);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task?.value !== "") {
    const id = Math.floor(Math.random() * 1000);
      dispatch(pushPendingTask({
        value:task?.value,
        id
      }));
      toast.success("Task added");
      setTask(initialState);
    }
  };
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    
    setTask({
        id:0,
        value:e.target.value
    })
  }
  return (
    <div className="flex items-center justify-center ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 md:w-1/3 border px-10 py-5 rounded-md"
      >
        <label htmlFor="task">Task</label>
        <input
          value={task?.value}
          onChange={handleChange}
          placeholder="Enter task..."
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
                py-2
                w-fit
                rounded-md
                bg-slate-800
                hover:bg-slate-700
                text-sm
                text-white
                "
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
