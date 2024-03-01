import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterValues } from '../../components/pages/Register/Register';
import { authAPI } from '../../assets/api/authAPI';
import { LoginValues } from '../../components/pages/Login/Login';

type Users = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  id?: number;
};
type AuthInitialState = {
  authorized: boolean;
  loggedIn: boolean;
  users: Users[];
};
const initialState: AuthInitialState = {
  authorized: false,
  loggedIn: false,
  users: [] as Users[],
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

const getUsers = createAsyncThunk('auth/getUsers', async () => {
  try {
    const res = await authAPI.getUsers();
    console.log(res.data);
  } catch (error) {}
});
const addUser = createAsyncThunk(
  'auth/addUser',
  async (newUser: RegisterValues) => {
    try {
      const res = await authAPI.registerMe(newUser);
      console.log(res.data);
    } catch (error) {}
  }
);
const logMeIn = createAsyncThunk(
  'auth/logMeIn',
  async (loginValues: LoginValues) => {
    try {
      const res = await authAPI.logMeIn(loginValues);
      console.log(res.data);
    } catch (error) {}
  }
);
export const auth = slice.reducer;
export const authACtions = slice.actions;
export const authThunks = { addUser, getUsers, logMeIn };
