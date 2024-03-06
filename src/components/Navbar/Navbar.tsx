import { AiOutlineHome, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { LuPenSquare } from 'react-icons/lu';
import { useSelector } from 'react-redux';

import { NavLink } from 'react-router-dom';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { authActions } from '../../redux/slices/authSlice';

const navbar = {
  main: `h-24 w-full bg-[#f3f4f6] flex justify-between items-center`,
  logo_box: `h-20 w-48 flex justify-start items-center text-3xl italic tracking-wider text-[#FBA834] `,
  logo: `pl-10`,
  btn_box: `pr-10 h-20 w-[500px] flex items-center justify-end w-full italic tracking-wider text-[#FBA834] `,
  btn: `py-1 px-4 ml-3 flex justify-end items-center border border-[#FBA834] rounded-full cursor-pointer  w-34 transition ease-in-out hover:-translate-y hover:scale-110 hover:duration-300 hover:bg-[#FBA834] hover:text-[#fff]`,
  icon: `ml-2 h-5 w-5`,
};
export const Navbar = () => {
  const dispatch = useAppDispatch();
  const authorized = useSelector<AppRootState, boolean>(
    (state) => state.auth.authorized
  );

  const logOutHandler = () => {
    dispatch(authActions.logOut());
  };
  return (
    <div className={navbar.main}>
      <div className={navbar.logo_box}>
        <NavLink to="/">
          <h1 className={navbar.logo}>blog it!</h1>
        </NavLink>
      </div>
      <div className={navbar.btn_box}>
        {authorized && (
          <NavLink
            to="/"
            className={`${navbar.btn}`}
            style={({ isActive }) => ({
              background: isActive ? '#FBA834' : '',
              color: isActive ? '#fff' : '',
            })}
          >
            <div>home</div> <AiOutlineHome className={navbar.icon} />
          </NavLink>
        )}
        {authorized && (
          <NavLink
            to="blogs/myblogs"
            className={`${navbar.btn}`}
            style={({ isActive }) => ({
              background: isActive ? '#FBA834' : '',
              color: isActive ? '#fff' : '',
            })}
          >
            <div>my blogs </div>
            <LuPenSquare className={navbar.icon} />
          </NavLink>
        )}
        {authorized && (
          <NavLink
            to="blogs/blogform"
            className={`${navbar.btn}`}
            style={({ isActive }) => ({
              background: isActive ? '#FBA834' : '',
              color: isActive ? '#fff' : '',
            })}
          >
            <div>add blog </div>
            <LuPenSquare className={navbar.icon} />
          </NavLink>
        )}
        {authorized ? (
          <NavLink
            onClick={logOutHandler}
            to="login"
            className={navbar.btn}
            style={({ isActive }) => ({
              background: isActive ? '#FBA834' : '',
              color: isActive ? '#fff' : '',
            })}
          >
            <div>log out</div>
            <AiOutlineLogout className={navbar.icon} />
          </NavLink>
        ) : (
          <NavLink
            to="login"
            className={navbar.btn}
            style={({ isActive }) => ({
              background: isActive ? '#FBA834' : '',
              color: isActive ? '#fff' : '',
            })}
          >
            <div>log in</div>
            <AiOutlineLogin className={navbar.icon} />
          </NavLink>
        )}
      </div>
    </div>
  );
};
