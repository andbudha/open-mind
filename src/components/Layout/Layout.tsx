import { Outlet } from 'react-router';
import { Navbar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';

const layout = {
  container: `bg-[#fafafa] min-h-screen flex flex-col justify-between`,
  layout_box: `h-full w-full`,
};

export const Layout = () => {
  return (
    <div className={layout.container}>
      <div>
        {' '}
        <Navbar />
      </div>

      <div className={layout.layout_box}>
        {' '}
        <Outlet />
      </div>
      <div>
        {' '}
        <Footer />
      </div>
    </div>
  );
};
