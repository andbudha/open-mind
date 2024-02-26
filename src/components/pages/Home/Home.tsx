import { Blogs } from '../../Blogs/Blogs';
import { Paginator } from '../../Paginator/Paginator';

const home = {
  main: `container mx-auto h-full bg-[#fafafa] flex flex-col justify-between`,
  paginator: `h-[100px] w-[100%] flex justify-center items-center`,
};

export const Home = () => {
  return (
    <div className={home.main}>
      <Blogs />
      <div className={home.paginator}>
        <Paginator />
      </div>
    </div>
  );
};
