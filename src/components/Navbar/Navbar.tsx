import { AiOutlineHome, AiOutlineLogin, AiOutlineLogout } from 'react-icons/ai';
import { LuPenSquare } from 'react-icons/lu';

import { NavLink } from 'react-router-dom';

const navbar = {
  main: `h-24 min-w-screen  bg-[#f3f4f6] flex justify-between`,
  logo_box: `h-24 w-full flex justify-start items-center text-3xl italic tracking-wider text-[#FC6736]`,
  logo: `pl-10`,
  btn_box: `pr-10 h-full flex items-center justify-end w-full italic tracking-wider text-[#FC6736]`,
  btn: `py-1 px-4 ml-3 flex justify-end items-center border border-orange-300 rounded-full cursor-pointer  w-34 transition ease-in-out hover:-translate-y hover:scale-110 hover: duration-300`,
  icon: `ml-2 h-5 w-5`,
  active: ` text-purple-100 visited:text-purple-600`,
};
export const Navbar = () => {
  return (
    <div className={navbar.main}>
      <div className={navbar.logo_box}>
        <NavLink to="/">
          <h1 className={navbar.logo}>blog it!</h1>
        </NavLink>
      </div>
      <div className={navbar.btn_box}>
        <NavLink to="/">
          <div className={navbar.btn}>
            <div>home</div> <AiOutlineHome className={navbar.icon} />
          </div>
        </NavLink>
        <NavLink to="blogform">
          <div className={navbar.btn}>
            <div>add blog </div>
            <LuPenSquare className={navbar.icon} />
          </div>
        </NavLink>
        <NavLink to="blogform">
          <div className={navbar.btn}>
            <div>log in </div>
            <AiOutlineLogin className={navbar.icon} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};