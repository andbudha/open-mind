import { useEffect } from 'react';
import './App.css';
import { Blogs } from './components/Blogs/Blogs';

import { useAppDispatch } from './redux/store';
import { blogsThunks } from './redux/slices/blogsSlice';
import { Route, Routes } from 'react-router-dom';
import { BlogForm } from './components/pages/BlogForm/BlogForm';
import { NotFound } from './components/pages/NotFound/NotFound';
import { Layout } from './components/Layout/Layout';
import { BlogPage } from './components/pages/BlogPage/BlogPage';
const styles = {
  main: `flex justify-center `,
  //container: `container flex bg-[#fafafa] min-h-screen`,
};
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(blogsThunks.fetchBlogs());
  }, []);
  return (
    <div className={styles.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Blogs />} />
          <Route path="/blogform" element={<BlogForm />} />
          <Route path="/blogpage" element={<BlogPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
