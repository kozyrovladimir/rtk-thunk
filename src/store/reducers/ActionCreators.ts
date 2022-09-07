import {AppDispatch} from "../store";
import axios from "axios";
import {IUser, userSlice} from "./UserSlice";
import {createAsyncThunk} from "@reduxjs/toolkit";

//первая реализация без Thunk
// export const fetchUsers = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users11');
//         dispatch(userSlice.actions.userFetchingSuccess(response.data))
//     } catch (error) {
//         // @ts-ignore
//         dispatch(userSlice.actions.userFetchingError(error.message))
//     }
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll',
    async (_,thunkAPI ) => {
        try {
                const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
                return response.data;
        } catch (error) {
                // @ts-ignore
                return  thunkAPI.rejectWithValue(error.message)
        }
    }
)
