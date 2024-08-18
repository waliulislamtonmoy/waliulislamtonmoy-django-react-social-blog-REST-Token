import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/profile/", {
      headers: {
        Authorization: "token 27f00cfa99aa608e9e3a8de3dde5ddf8751d3bbc",
      },
    });
    return res.data;
  }
);

const ProfileSlice = createSlice({
  name: "profile",
  initialState: {
    is_loading: false,
    data: [],
    error: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfile.pending, (state, action) => {
      state.is_loading = true;
    });
    builder.addCase(fetchProfile.fulfilled, (state, action) => {
      state.is_loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchProfile.rejected, (state, action) => {
      state.is_loading = false;
      state.data = null;
      state.error = action.error;
    });
  },
});

export default ProfileSlice.reducer;
