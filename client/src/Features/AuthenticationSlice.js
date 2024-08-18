import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api/login/";
export const authLogin = createAsyncThunk("auth,authLogin", async (user) => {
  try {
    const res = await axios.post(BASE_URL, user).then((res) => {
      window.localStorage.setItem("token", res.data.token);
      window.location.href = "/";
      console.log(res.data);
    });
  } catch (error) {
    alert("user name or password didnot match found");
  }
});

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    is_loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(authLogin.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(authLogin.fulfilled, (state, action) => {
      state.is_loading = false;

      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(authLogin.rejected, (state, action) => {
      state.is_loading = false;
      state.data = [];
      state.error = action.error;
    });
  },
});

export default AuthSlice.reducer;
