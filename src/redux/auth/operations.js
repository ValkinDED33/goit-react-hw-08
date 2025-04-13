import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (value) => {
  axios.defaults.headers.common.Authorization = value;
};

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/signup", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

export const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", credentials);
      setAuthHeader(`Bearer ${response.data.token}`);
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  }
);

export const logOut = createAsyncThunk("auth/logout", async () => {
  await axios.post("/users/logout");

  delete axios.defaults.headers.common.Authorization;
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const reduxState = thunkAPI.getState();
      const token = reduxState.auth.token;

      if (!token) {
        return thunkAPI.rejectWithValue("No token available");
      }

      setAuthHeader(`Bearer ${token}`);
      const response = await axios.get("/users/current");
      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message;
      return thunkAPI.rejectWithValue(errorMsg);
    }
  },
  {
    condition: (_, thunkAPI) => {
      const reduxState = thunkAPI.getState();
      return reduxState.auth.token !== null;
    },
  }
);
