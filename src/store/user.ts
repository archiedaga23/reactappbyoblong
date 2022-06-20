import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IEmployee } from "../App";

const userSlicer = createSlice({
    name: 'user',
    initialState:<IEmployee>{},
    reducers: {
        setCurrentUser: ((state: IEmployee, action: PayloadAction<IEmployee>) => {
            return action.payload;
        })
    }
})

export const { setCurrentUser } = userSlicer.actions;

export default userSlicer.reducer;