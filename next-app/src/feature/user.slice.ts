import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState, UserFormDTO, initialStateUserForm } from "./user.types";
import axios, { AxiosResponse } from "axios";
import { consoleLog, HttpStatus } from "@/constants/costants";
import { USER_ERROR, USER_START, USER_SUCCESS } from "./user.action";

const API_URL: string = process.env.NEXT_PUBLIC_API_URL!;

//-------------------------

const initialState = initialStateUserForm;

export const simulateRegisterUser = createAsyncThunk(
  USER_START,
  async (body: UserFormDTO) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const response: AxiosResponse<UserFormDTO> = await axios.post(
        `${API_URL}/find`,
        body,
        config,
      );
      return response.data;
    } catch (error) {
      console.error(consoleLog.error, error);
      throw error;
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder: { addCase: (arg0: any, arg1: (state: UserState) => void) => { (): any; new(): any; addCase: { (arg0: any, arg1: (state: UserState, action: any) => void): { (): any; new(): any; addCase: { (arg0: any, arg1: (state: UserState) => void): void; new(): any; }; }; new(): any; }; }; }) {
    builder
      .addCase(simulateRegisterUser.pending, (state: UserState) => {
        state.action = USER_START;
        state.status = HttpStatus.Created;
        state.error = "";
      })
      .addCase(
        simulateRegisterUser.fulfilled,
        (state: UserState, action: PayloadAction<UserFormDTO>) => {
          state.action = USER_SUCCESS;
          state.status = HttpStatus.OK;
          state.error = "";
          state.isAuthenticated = "true";
          if (action.payload) {
            state.name = action.payload.name;
            state.age = action.payload.age;
            state.email = action.payload.email;
            localStorage.setItem("ADDED_NEW_USER", state.isAuthenticated);
          }
        },
      )
      .addCase(simulateRegisterUser.rejected, (state: UserState) => {
        state.action = USER_ERROR;
        state.status = HttpStatus.Bad_Request;
        state.error = "An unknown error occurred";
      });
  },
});

export default authSlice.reducer;
