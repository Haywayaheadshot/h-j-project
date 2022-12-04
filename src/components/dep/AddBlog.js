import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../redux/editor/Editor';

export default function AddBlog() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);
  const onChangetext = (e) => {
    setText(e.target.value);
  };
  const onPressEnter = (e) => {
    if (e.key === 'Enter') {
      dispatch(addBlog({
        id, text,
      }));
      setText('');
    }
  };
  return (
    <>
      <input type="text" onChange={onChangetext} onKeyDown={onPressEnter} />
    </>
  );
}
