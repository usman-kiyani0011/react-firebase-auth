import { createSlice } from "@reduxjs/toolkit";

interface INITIALSTATE {
  currentUser: boolean;
}
const initialState: INITIALSTATE = {
  currentUser: false,
};
const authSlice = createSlice({
  name: "test",
  initialState,
  reducers: {
    setLogin(state) {
      state.currentUser = true;
    },
    setSignout(state) {
      state.currentUser = false;
    },
  },
});

export const { setLogin, setSignout } = authSlice.actions;
export default authSlice.reducer;
