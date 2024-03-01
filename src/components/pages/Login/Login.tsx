import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

const login = {
  main_box: `h-full w-full flex justify-center items-center tracking-wider`,
  form_box: `flex flex-col justify-center items-center w-[320px] h-[280px] shadow-md border border-orange-400 rounded-md`,
  form: `flex flex-col justify-center items-center min-w-[320px] h-[150px]`,
  input: `text-sm tracking-wider h-[30px] w-[100%] border-[1px] border-orange-400 my-2 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  input_box: `w-[80%]`,
  error_message: `text-xs text-red-500 font-medium	`,
  login_btn: `flex justify-center items-center tracking-wider  h-[30px] w-[80%] text-[#FC6736] border-[1px] border-orange-400 my-2 p-2 rounded transition ease-in-out  hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
  info_box: `h-auto w-[80%] text-sm text-orange-600 my-3`,
  register_link: `text-orange-600 underline`,
};

export type LoginValues = {
  email: string;
  password: string;
};

export type LoginErrorValues = {
  email?: string;
  password?: string;
};
export const Login = () => {
  const validate = (values: LoginValues) => {
    const errors: LoginErrorValues = {};

    if (!values.email) {
      errors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = 'Invalid email address';
    }

    if (!values.password) {
      errors.password = 'Password is required';
    }
    if (values.password && values.password.length < 5) {
      errors.password = 'No less than 5 chars';
    }
    return errors;
  };
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate,
    onSubmit: (values: LoginValues, onSubmitProps) => {
      console.log(values);
      onSubmitProps.resetForm();
    },
  });
  return (
    <div className={login.main_box}>
      <div className={login.form_box}>
        <form className={login.form} onSubmit={formik.handleSubmit}>
          <div className={login.input_box}>
            <div className={login.error_message}>
              {' '}
              {formik.errors.email ? <div>{formik.errors.email}</div> : null}
            </div>

            <input
              className={login.input}
              id="email"
              name="email"
              type="email"
              placeholder="Your email..."
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </div>
          <div className={login.input_box}>
            <div className={login.error_message}>
              {' '}
              {formik.errors.password ? (
                <div>{formik.errors.password}</div>
              ) : null}
            </div>
            <input
              className={login.input}
              id="password"
              name="password"
              type="password"
              placeholder="Your password..."
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </div>

          <button className={login.login_btn} type="submit">
            Login
          </button>
        </form>
        <div className={login.info_box}>
          <p>
            If you do not have an account, you can register{' '}
            <span>
              <NavLink to={'register'} className={login.register_link}>
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
