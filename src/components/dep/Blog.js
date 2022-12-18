import React from 'react';
import { useSelector } from 'react-redux';
import DeleteBlog from './DeleteBlog';
import '../../styles/blog.css';

export default function Blog() {
  const blogs = useSelector((state) => state.blogs);

  return (
    <div className="mapped-blog-container">
      { blogs.map((blog) => (
        <div key={blog.id}>
          <div className="plus-delete-btn-cont">
            ➕
            <DeleteBlog id={blog.id} />
          </div>
          <blog.tagName contentEditable="true">
            {blog.text}
          </blog.tagName>
        </div>
      )) }
    </div>
  );
}
