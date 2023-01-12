import { createSlice } from "@reduxjs/toolkit";

export type SubjectProps = {
  title: string;
};

export const subjectSlice = createSlice({
  name: "subject",

  initialState: { title: "hello world" },

  reducers: {
    setEnt(state, action) {
      return action.payload;
    },
    setTitle(state, action) {
      state.title = action.payload;
    },
  },

  //   extraReducers: {
  //     [HYDRATE]: (state, action) => {
  //       console.log("HYDRATE", state, action.payload);
  //       return {
  //         ...state,
  //         ...action.payload.subject,
  //       };
  //     },
  //   },
});

export const subjectAction = subjectSlice.actions;

export default subjectSlice.reducer;
