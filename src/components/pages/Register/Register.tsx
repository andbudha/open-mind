import { useFormik } from 'formik';
import { AppRootState, useAppDispatch } from '../../../redux/store';
import { authThunks } from '../../../redux/slices/authSlice';
import { NavLink, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Loader } from '../../Loader/Loader';
import { AuthRequestStatus } from '../../../assets/types/auth_types';
import {
  UserRegisterValues,
  RegisterErrorValues,
} from '../../../assets/types/formik_types';

const register = {
  main_box: `h-full w-full flex justify-center items-center tracking-wider`,
  form_box: `flex flex-col justify-center items-center w-[340px] min-h-[400px] shadow-md border border-orange-400 rounded-md`,
  form: `flex flex-col justify-center items-center min-w-[320px] min-h-[300px]`,
  input: `text-sm tracking-wider h-[30px] w-[100%] border-[1px] border-orange-400 my-2 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  input_box: `w-[80%]`,
  error_message: `text-xs text-red-500 font-medium	`,
  register_btn: `flex justify-center items-center tracking-wider  h-[30px] w-[80%] text-[#FC6736] border-[1px] border-orange-400 my-2 p-2 rounded transition ease-in-out  hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
  info_box: `h-auto w-[75%] text-sm text-orange-600 my-2`,
  register_link: `text-orange-600 underline`,
};

export const Register = () => {
  const dispatch = useAppDispatch();
  const authRequestStatus = useSelector<AppRootState, AuthRequestStatus>(
    (state) => state.auth.authRequestStatus
  );
  const registered = useSelector<AppRootState, boolean>(
    (state) => state.auth.registered
  );
  const validate = (values: UserRegisterValues) => {
    const errors: RegisterErrorValues = {};
    if (!values.firstName) {
      errors.firstName = 'First-name is required';
    }

    if (!values.secondName) {
      errors.secondName = 'Second-name is required';
    }
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password && values.password.length < 5) {
      errors.password = 'No less than 5 chars';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values: UserRegisterValues, onSubmitProps) => {
      dispatch(authThunks.registerUser(values));
      onSubmitProps.resetForm();
    },
  });

  if (registered) {
    return <Navigate to={'/login'} />;
  }
  return (
    <div className={register.main_box}>
      {authRequestStatus === 'loading' && <Loader />}
      <div className={register.form_box}>
        <form className={register.form} onSubmit={formik.handleSubmit}>
          <div className={register.input_box}>
            <div className={register.error_message}>
              {' '}
              {formik.errors.firstName ? (
                <div>{formik.errors.firstName}</div>
              ) : null}
            </div>
            <input
              className={register.input}
              id="firstName"
              name="firstName"
              type="firstName"
              placeholder="Your first name..."
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
          </div>
          <div className={register.input_box}>
            <div className={register.error_message}>
              {' '}
              {formik.errors.secondName ? (
                <div>{formik.errors.secondName}</div>
              ) : null}
            </div>
            <input
              className={register.input}
              id="secondName"
              name="secondName"
              type="secondName"
              placeholder="Your second name..."
              onChange={formik.handleChange}
              value={formik.values.secondName}
            />
          </div>
          <div className={register.input_box}>
            <div className={register.error_message}>
              {' '}
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>

            <input
              className={register.input}
              id="email"
              name="email"
              type="email"
              placeholder="Your email..."
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className={register.input_box}>
            <div className={register.error_message}>
              {' '}
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <input
              className={register.input}
              id="password"
              name="password"
              type="password"
              placeholder="Your password..."
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>
          <button className={register.register_btn} type="submit">
            Register
          </button>
        </form>
        <div className={register.info_box}>
          <p>
            If you have an account, you can log in{' '}
            <span>
              <NavLink to={'/login'} className={register.register_link}>
                here
              </NavLink>{' '}
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
