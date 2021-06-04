import React from 'react';
import { useFormik } from 'formik';

const PostForm = ({ addPost }) => {
  const formik = useFormik({
    initialValues: {
      title: '',
      body: '',
    },
    onSubmit: values => {
      addPost(values.title, values.body);
    },
  });

  return (
    <div>
      <h2>Add new post</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          tyoe='text'
          placeholder='title'
          name='title'
          onChange={formik.handleChange}
          value={formik.values.title}
        />
        <input
          tyoe='text'
          placeholder='body'
          name='body'
          onChange={formik.handleChange}
          value={formik.values.body}
        />
        <button type='submit'>Submit Post!</button>
      </form>
    </div>
  );
};

export default PostForm;
