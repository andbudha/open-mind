import { useAppDispatch } from '../../../redux/store';
import { Blogs } from '../../Blogs/Blogs';
import { Paginator } from '../../Paginator/Paginator';
import { useEffect } from 'react';
import { authActions } from '../../../redux/slices/authSlice';

const home = {
  main: `container mx-auto h-full bg-[#fafafa] flex flex-col justify-between`,
  paginator: `h-[100px] w-[100%] flex justify-center items-center`,
};

export const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authActions.setRequestStatus({ status: 'idle' }));
  }, []);

  return (
    <div className={home.main}>
      <Blogs />
      <div className={home.paginator}>
        <Paginator />
      </div>
    </div>
  );
};
