import { AiOutlineHome } from 'react-icons/ai';
import { LuPenSquare } from 'react-icons/lu';

const styles = {
  main: `center w-60 min-h-screen bg-[#f3f4f6] flex flex-col items-center`,
  logo_box: `h-24 w-full flex justify-center items-center text-3xl italic tracking-wider text-[#FC6736]`,
  logo: `pl-6`,
  btn_box: `pr-6 h-12 flex flex-col items-end w-full italic tracking-wider text-[#FC6736]`,
  btn: `py-2 px-4 flex justify-end items-center rounded cursor-pointer mb-2  w-34 transition ease-in-out hover:-translate-y-1 hover:scale-110 hover: duration-300`,
  icon: `ml-2 h-5 w-5`,
};
export const SideBar = () => {
  return (
    <div className={styles.main}>
      <div className={styles.logo_box}>
        <h1>Post it!</h1>
      </div>
      <div className={styles.btn_box}>
        <div className={styles.btn}>
          <div>Home</div> <AiOutlineHome className={styles.icon} />
        </div>
        <div className={styles.btn}>
          <div>Add Blog </div>
          <LuPenSquare className={styles.icon} />
        </div>
      </div>
    </div>
  );
};
