import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBlog } from '../../redux/editor/Editor';
import deleteBlog from '../images/remove.png';

export default function DeleteBlog(id) {
  const dispatch = useDispatch();
  const onClickRemove = () => {
    dispatch(removeBlog(id));
  };
  return (
    <button onClick={onClickRemove} type="button">
      <img className="ux-icons" src={deleteBlog} alt="del-pop-up" />
    </button>
  );
}
