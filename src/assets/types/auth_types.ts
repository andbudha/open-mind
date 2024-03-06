export type Users = {
  firstName: string;
  secondName: string;
  email: string;
  id: number;
  password?: string;
};
export type AuthRequestStatus = 'idle' | 'loading';
export type AuthInitialState = {
  authorized: boolean;
  registered: boolean;
  authRequestStatus: AuthRequestStatus;
  error: null | string;
  users: Users[];
};

type LoggedInResponseData = {
  firstName: string;
  secondName: string;
  email: string;
  id: number;
};
export type LoggedInResponse = {
  token: string;
  data: LoggedInResponseData;
};

type RegisterResponseData = {
  firstName: string;
  secondName: string;
  email: string;
  password: string;
  id: number;
};
export type RegisterResponse = {
  token: string;
  data: RegisterResponseData;
};
