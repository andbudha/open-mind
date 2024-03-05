import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RegisterValues } from '../../components/pages/Register/Register';
import { authAPI } from '../../assets/api/authAPI';
import { LoginValues } from '../../components/pages/Login/Login';

export type Users = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  id?: number;
};
export type AuthRequestStatus = 'idle' | 'loading';
type AuthInitialState = {
  authorized: boolean;
  authRequestStatus: AuthRequestStatus;
  users: Users[];
};
const initialState: AuthInitialState = {
  authorized: false,
  authRequestStatus: 'idle' as AuthRequestStatus,
  users: [] as Users[],
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.authorized = false;
    },
    setAuthRequestStatus: (
      state,
      action: PayloadAction<{ status: 'idle' }>
    ) => {
      state.authRequestStatus = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logMeIn.pending, (state) => {
        state.authRequestStatus = 'loading';
      })
      .addCase(logMeIn.fulfilled, (state) => {
        state.authorized = true;
      });
  },
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
export const authActions = slice.actions;
export const authThunks = { addUser, getUsers, logMeIn };
