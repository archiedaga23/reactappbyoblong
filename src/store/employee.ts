import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployee } from "../App";

const employeeSlicer = createSlice({
    name: 'employees',
    initialState: <IEmployee[]> [],
    reducers: {
        addEmployee: ((state: IEmployee[], action: PayloadAction<IEmployee>) => {
            return [...state, action.payload];
        }),
        fetchEmployee: ((state: IEmployee[], action: PayloadAction<IEmployee[]>) => {
            return action.payload;
        }),
        updateEmployee: ((state: IEmployee[], action: PayloadAction<IEmployee>) => {
            return state.map(employee => employee.id === action.payload.id ? action.payload : employee);
        }),
        deleteEmployee: ((state: IEmployee[], action: PayloadAction<number>) => {
            return state.filter(employee => employee.id !== action.payload);
        })  
    },
})

export const { addEmployee, updateEmployee, deleteEmployee, fetchEmployee } = employeeSlicer.actions;

export default employeeSlicer.reducer;