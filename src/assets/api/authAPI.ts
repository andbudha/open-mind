import axios from 'axios';
import { LoginValues } from '../../components/pages/Login/Login';
import { RegisterValues } from '../../components/pages/Register/Register';

const instance = axios.create({
  baseURL: 'https://1d811849dfc8e7d5.mokky.dev',
});

export const authmeAPI = {
  logMeIn: (loginValues: LoginValues) => {
    return instance.post('/auth', { ...loginValues });
  },
  registerMe: (registerValues: RegisterValues) => {
    return instance.post('/register', { ...registerValues });
  },
};
