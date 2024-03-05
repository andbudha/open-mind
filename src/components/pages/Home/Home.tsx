import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { AppRootState, useAppDispatch } from '../../../redux/store';
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
    dispatch(authActions.setAuthRequestStatus({ status: 'idle' }));
  }, []);
  const authorized = useSelector<AppRootState, boolean>(
    (state) => state.auth.authorized
  );

  if (!authorized) {
    return <Navigate to="login" />;
  }

  return (
    <div className={home.main}>
      <Blogs />
      <div className={home.paginator}>
        <Paginator />
      </div>
    </div>
  );
};
