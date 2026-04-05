import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

const initialState: User | null = null;

const userSlice = createSlice({
  name: "user",
  initialState: initialState as User | null,
  reducers: {
    addUser: (_state, action: PayloadAction<User>) => {
      return action.payload;
    },
    removeUser: () => {
      return null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;

export default userSlice.reducer;