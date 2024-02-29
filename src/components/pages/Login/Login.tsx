import { useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

const login = {
  main_box: `h-full w-full flex justify-center items-center`,
  form_box: `flex flex-col justify-center items-center w-[320px] h-[260px] shadow-md border border-orange-400 rounded-md`,
  form: `flex flex-col justify-center items-center min-w-[320px] h-[150px]`,
  input: `text-sm tracking-wider h-[30px] w-[80%] border-[1px] border-orange-400 m-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  login_btn: `flex justify-center items-center tracking-wider  h-[30px] w-[80%] text-[#FC6736] border-[1px] border-orange-400 my-1 p-2 rounded transition ease-in-out  hover: duration-300 hover:bg-orange-400 hover:text-[#fff]`,
  info_box: `h-auto w-[80%] text-sm text-orange-600`,
  register_link: `text-orange-600 underline`,
};

type LoginValues = {
  email: string;
  password: string;
};
export const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values: LoginValues, onSubmitProps) => {
      console.log(values);
      onSubmitProps.resetForm();
    },
  });
  return (
    <div className={login.main_box}>
      <div className={login.form_box}>
        <form className={login.form} onSubmit={formik.handleSubmit}>
          <input
            className={login.input}
            id="email"
            name="email"
            type="email"
            placeholder="Your email..."
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <input
            className={login.input}
            id="password"
            name="password"
            type="password"
            placeholder="Your password..."
            onChange={formik.handleChange}
            value={formik.values.password}
          />
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
