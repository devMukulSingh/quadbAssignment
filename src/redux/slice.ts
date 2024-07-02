import { createSlice } from "@reduxjs/toolkit";

export interface Itask{
    value:string,
    id:number,
    completed:boolean,
}

export interface IinitialState {
    tasks:Itask[] 
}

const initialState : IinitialState = {
    tasks:[]
}

const rootSlice = createSlice({
    name:'rootSlice',
    initialState,
    reducers : {
        pushPendingTask : (state,action) => {
            state.tasks?.push(action.payload);
        },
        setTasks : (state,action) => {
            state.tasks = action.payload;
        }

    }
})

export default rootSlice.reducer;

export const { pushPendingTask, setTasks } = rootSlice.actions;

