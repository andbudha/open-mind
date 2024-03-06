import axios from 'axios';
import { LoggedInResponse, RegisterResponse, User } from '../types/auth_types';
import { LoginValues, UserRegisterValues } from '../types/formik_types';

const instance = axios.create({
  baseURL: 'https://1d811849dfc8e7d5.mokky.dev',
});

export const authAPI = {
  getUsers: () => {
    return instance.get<User[]>('/users');
  },
  logMeIn: (loginValues: LoginValues) => {
    return instance.post<LoggedInResponse>('/auth', { ...loginValues });
  },
  registerMe: (newUser: UserRegisterValues) => {
    return instance.post<RegisterResponse>('/register', { ...newUser });
  },
};
