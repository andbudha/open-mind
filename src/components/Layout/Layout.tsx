import { Outlet } from 'react-router';
import { SideBar } from '../SideBar/SideBar';
const styles = {
  container: `container flex bg-[#fafafa] min-h-screen`,
};

export const Layout = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      <Outlet />
    </div>
  );
};
