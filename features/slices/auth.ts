import { createSlice } from "@reduxjs/toolkit";

interface AuthInterface {
  user:
    | {
        _id: string;
        clerkid: string;
        username: string;
        firstname: string;
        lastname: string;
        email: string;
        photourl: string;
        coverphotourl: string;
        dob: string;
        gender: string;
        followers: Array<string>;
        following: string[];
        posts: string[];
        createdAt: string;
        updatedAt: string;
        phone: string | undefined;
        description: string | undefined;
      }
    | undefined;
}

const initialState: AuthInterface = {
  user: undefined,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuth: (state: AuthInterface, action) => {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setAuth } = authSlice.actions;
