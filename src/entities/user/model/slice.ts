import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthResponse, IUser } from "./types";

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
    updateActiveUser(state, action: PayloadAction<IUser>) {
      state.user = action.payload;
    },
    deleteActiveUser(state, _) {
      state.token = "";
      state.user = null;
    },
    updatePoints(state, action) {
      state.user!.diamonds += +action.payload.diamonds;
      state.user!.points += +action.payload.points;
    }
  }
});

export const { setActiveUser, deleteActiveUser, updateActiveUser, updatePoints } = userSlice.actions;