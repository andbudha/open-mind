import { Outlet } from 'react-router';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

const layout = {
  container: `bg-[#fafafa] h-svh flex flex-col justify-between`,
  layout_box: ``,
};

export const Layout = () => {
  return (
    <div className={layout.container}>
      <Navbar />
      <div className={layout.layout_box}>
        {' '}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
