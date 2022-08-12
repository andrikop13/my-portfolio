import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isLoading: false,
    message: { showMessage: false, text: "", severity: "" },
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    showMessage(state, action) {
      state.message.showMessage = true;
      state.message.text = action.payload.message;
      state.message.severity = action.payload.status;
    },
    resetMessage(state) {
      state.message.showMessage = false;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
