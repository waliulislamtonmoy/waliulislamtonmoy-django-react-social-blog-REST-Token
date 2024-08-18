import { configureStore } from "@reduxjs/toolkit";

import BlogSReducer from "../Features/BlogSlice";
import ProfileReducer from "../Features/ProfileSlice";

export const store = configureStore({
  reducer: {
    blogR: BlogSReducer,
    profileR: ProfileReducer,
  },
});

export default store;
