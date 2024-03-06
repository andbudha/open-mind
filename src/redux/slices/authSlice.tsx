import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authAPI } from '../../assets/api/authAPI';
import { toastError } from '../../assets/utils/toastError';
import { toastSuccess } from '../../assets/utils/toastSuccess';
import { errorMessage } from '../../assets/utils/errorMessage';
import {
  AuthInitialState,
  AuthRequestStatus,
  LoggedInResponse,
  RegisterResponse,
  Users,
} from '../../assets/types/auth_types';
import {
  UserRegisterValues,
  LoginValues,
} from '../../assets/types/formik_types';

const initialState: AuthInitialState = {
  authorized: false,
  registered: false,
  authRequestStatus: 'idle' as AuthRequestStatus,
  error: null,
  users: [] as Users[],
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state) => {
      state.authorized = false;
    },
    setRequestStatus: (
      state,
      action: PayloadAction<{ status: AuthRequestStatus }>
    ) => {
      state.authRequestStatus = action.payload.status;
    },
    setError: (_, action: PayloadAction<{ error: string }>) => {
      if (action.payload.error === 'Unauthorized') {
        toastError(`${action.payload.error}. Invalid email or password!`);
      } else {
        toastError(action.payload.error);
      }
    },
    setRegisterStatus: (state, action: PayloadAction<{ status: boolean }>) => {
      state.registered = action.payload.status;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(logMeIn.pending, (state) => {
        state.authRequestStatus = 'loading';
      })
      .addCase(logMeIn.fulfilled, (state, action) => {
        if (action.payload?.data && action.payload?.data.token) {
          state.authorized = true;
        }
      })
      .addCase(registerUser.pending, (state) => {
        state.authRequestStatus = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        if (action.payload?.data) {
          toastSuccess(
            'You have successfully registered. Proceed to logging in now!'
          );
        }
        state.authRequestStatus = 'idle';
      });
  },
});

const getUsers = createAsyncThunk('auth/getUsers', async () => {
  try {
    const res = await authAPI.getUsers();
    const users: Users[] = res.data;
    console.log(users);
  } catch (error) {}
});
const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (newUser: UserRegisterValues, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const res = await authAPI.registerMe(newUser);
      const data: RegisterResponse = res.data;
      if (data.token) {
        dispatch(authActions.setRegisterStatus({ status: true }));
        return { data };
      }
    } catch (error: unknown) {
      const errMsg: string = errorMessage(error);
      dispatch(authActions.setError({ error: errMsg }));
    }
  }
);
const logMeIn = createAsyncThunk(
  'auth/logMeIn',
  async (loginValues: LoginValues, thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      const res = await authAPI.logMeIn(loginValues);
      const data: LoggedInResponse = res.data;
      if (data) {
        return { data };
      }
    } catch (error: any) {
      const errorMsg: string = error.response.data.error;
      dispatch(authActions.setError({ error: errorMsg }));
    } finally {
      dispatch(authActions.setRequestStatus({ status: 'idle' }));
    }
  }
);
export const auth = slice.reducer;
export const authActions = slice.actions;
export const authThunks = { registerUser, getUsers, logMeIn };
