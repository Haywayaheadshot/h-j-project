import React from 'react';
import { useSelector } from 'react-redux';
import DeleteBlog from './DeleteBlog';
import '../../styles/blog.css';

export default function Blog() {
  const blogs = useSelector((state) => state.blogs);
  return (
    <>
      { blogs.map((blog) => (
        <div key={blog.id}>
          <div className="plus-delete-btn-cont">
            ➕
            <DeleteBlog id={blog.id} />
          </div>
          <blog.tagName>
            {blog.text}
          </blog.tagName>
        </div>
      )) }
    </>
  );
}

// Blog.propTypes = {
//   id: PropTypes.string.isRequired,
//   text: PropTypes.string.isRequired,
// };
