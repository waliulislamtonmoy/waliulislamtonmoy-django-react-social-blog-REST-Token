import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const BASE_URL = "http://127.0.0.1:8000/api/blogs/";
export const fetchblog = createAsyncThunk("blog/fetchblog", async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/blogs/");
  return res.data;
});

export const fetchoneblog = createAsyncThunk(
  "blog/fetchoneblog",
  async (id) => {
    const res = await axios.get(BASE_URL, id);
    return res.data;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    is_loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchblog.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(fetchblog.fulfilled, (state, action) => {
      state.is_loading = false;

      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchblog.rejected, (state, action) => {
      state.is_loading = false;
      state.data = [];
      state.error = action.error;
    });
  },
});

export default blogSlice.reducer;
