import { useFormik } from 'formik';

const blogform = {
  main_box: `container h-full w-full flex justify-center items-center `,
  blogform_box: `flex justify-center items-center h-[500px] w-[350px] border-[1px] border-orange-200 rounded shadow-md`,
  form_box: `flex flex-col`,
  input: `h-[40px] w-[320px] border-[1px] border-orange-400 my-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  textarea: `border-[1px] border-orange-400 my-1 p-2 rounded focus:outline-none focus:ring-1 ring-orange-500 focus:border-orange-500`,
  submit_btn: `h-[40px] w-[320px] text-[#FC6736] border-[1px] border-orange-400 my-1 p-2 rounded`,
};

export const BlogForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      content: '',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className={blogform.main_box}>
      <div className={blogform.blogform_box}>
        <form className={blogform.form_box} onSubmit={formik.handleSubmit}>
          {/* <label htmlFor="firstName">First Name</label> */}
          <input
            className={blogform.input}
            id="firstName"
            name="firstName"
            type="text"
            placeholder="your name..."
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />

          {/* <label htmlFor="lastName">Last Name</label> */}
          <input
            className={blogform.input}
            id="lastName"
            name="lastName"
            type="text"
            placeholder="blog title..."
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />

          {/* <label htmlFor="email">Email Address</label> */}
          <input
            className={blogform.input}
            id="email"
            name="email"
            type="email"
            placeholder="blog keyword..."
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <textarea
            className={blogform.textarea}
            id="content"
            name="content"
            cols={20}
            rows={10}
            placeholder="blog content..."
            onChange={formik.handleChange}
            value={formik.values.content}
          />

          <button className={blogform.submit_btn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
