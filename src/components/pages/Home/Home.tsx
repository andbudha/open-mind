import { Blogs } from '../../Blogs/Blogs';

const home = {
  main: `container mx-auto h-full bg-[#fafafa]`,
};

export const Home = () => {
  return (
    <div className={home.main}>
      <Blogs />
    </div>
  );
};
