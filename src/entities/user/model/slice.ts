import { createSlice } from "@reduxjs/toolkit";
import { IAuthResponse, IUser } from "./types";
import { PayloadAction } from "@reduxjs/toolkit/react";

interface UserState {
  token: string;
  user: IUser | null;
}

const initialState: UserState = {
  token: '',
  user: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setActiveUser(state, action: PayloadAction<IAuthResponse>) {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    deleteActiveUser(state, _) {
      state.token = "";
      state.user = null;
    }
  }
});

export const { setActiveUser, deleteActiveUser } = userSlice.actions;