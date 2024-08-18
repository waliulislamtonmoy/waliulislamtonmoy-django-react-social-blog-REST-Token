import { configureStore } from "@reduxjs/toolkit";

import BlogSReducer from "../Features/BlogSlice";
import ProfileReducer from "../Features/ProfileSlice";
import AuthLogin from "../Features/AuthenticationSlice";

export const store = configureStore({
  reducer: {
    blogR: BlogSReducer,
    profileR: ProfileReducer,
    authR: AuthLogin,
  },
});

export default store;
