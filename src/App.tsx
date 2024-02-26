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
import { EditBlogForm } from './components/pages/EditBlogForm/EditBlogForm';
import { Home } from './components/pages/Home/Home';
const app = {
  main: `container mx-auto h-dvh bg-[#fafafa]`,
};
function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(blogsThunks.fetchBlogs());
  }, []);
  return (
    <div className={app.main}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="blogs/:id" element={<BlogPage />} />
          <Route path="blogform" element={<BlogForm />} />
          <Route path="editblogform/:id" element={<EditBlogForm />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
