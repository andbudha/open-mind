import { useSelector } from 'react-redux';
import { AppRootState, useAppDispatch } from '../../redux/store';
import { Blog } from '../../assets/common/types';
import { blogsActions } from '../../redux/slices/blogsSlice';

const paginator = {
  main: `h-[50px] w-[100%] flex justify-center items-center bg-[#fafafa]`,
  btn_box: `h-[40px] min-w-[100px] flex justify-center items-center`,
  btn: `h-[34px] mx-1 flex justify-center items-center w-[34px] rounded-full border text-orange-400 font-semibold border-[#FBA834] cursor-pointer  hover:bg-[#FBA834] hover:text-[#fff]`,
  active_btn: `bg-[#FBA834] text-white border-slate-200`,
};
export const Paginator = () => {
  const dispatch = useAppDispatch();
  const blogs = useSelector<AppRootState, Blog[]>((state) => state.blogs.blogs);

  const blogsPerPage = useSelector<AppRootState, number>(
    (state) => state.blogs.blogsPerPage
  );
  const currentPage = useSelector<AppRootState, number>(
    (state) => state.blogs.currentPage
  );

  let pages = [];

  for (let i = 1; i <= Math.ceil(blogs.length / blogsPerPage); i++) {
    pages.push(i);
  }

  const setPageOnClick = (page: number) => {
    dispatch(blogsActions.setCurrentPage({ currentPage: page }));
  };
  const pageBtn = pages.map((page, index) => (
    <div
      key={index}
      className={`${paginator.btn} ${
        currentPage === page && paginator.active_btn
      }`}
      onClick={() => setPageOnClick(page)}
    >
      {page}
    </div>
  ));
  return (
    <div className={paginator.main}>
      {pages.length > 1 && <div className={paginator.btn_box}>{pageBtn}</div>}
    </div>
  );
};
