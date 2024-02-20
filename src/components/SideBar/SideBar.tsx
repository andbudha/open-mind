import { AiOutlineHome } from 'react-icons/ai';
import { LuPenSquare } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';

const sidebar = {
  main: `center w-60 min-h-screen bg-[#f3f4f6] flex flex-col items-center`,
  logo_box: `h-24 w-full flex justify-center items-center text-3xl italic tracking-wider text-[#FC6736]`,
  logo: `pl-6`,
  btn_box: `pr-6 h-full flex flex-col items-end w-full italic tracking-wider text-[#FC6736]`,
  btn: `py-2 px-4 flex justify-end items-center rounded cursor-pointer mb-2  w-34 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300`,
  icon: `ml-2 h-5 w-5`,
  active: ` text-purple-100 visited:text-purple-600`,
};
export const SideBar = () => {
  return (
    <div className={sidebar.main}>
      <div className={sidebar.logo_box}>
        <h1>blog it!</h1>
      </div>
      <div className={sidebar.btn_box}>
        <NavLink to="/">
          <div className={sidebar.btn}>
            <div>home</div> <AiOutlineHome className={sidebar.icon} />
          </div>
        </NavLink>
        <NavLink to="blogform">
          <div className={sidebar.btn}>
            <div>add blog </div>
            <LuPenSquare className={sidebar.icon} />
          </div>
        </NavLink>
      </div>
    </div>
  );
};
