import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../redux/editor/Editor';
import fontType from '../images/font-size.png';
import '../../styles/add-blog.css';

export default function AddBlog() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const uId = uuid();
  const id = uId.slice(0, 8);

  const onChangetext = (e) => {
    // Set value of text
    setText(e.target.value);
  };
  // const startTextInput = text.slice(0, 2);
  const headerTags = {
    '/1': 'h1',
    '/2': 'h2',
    '/3': 'h3',
    '/4': 'h4',
    '/5': 'h5',
    '/6': 'h6',
  };

  const onPressEnter = (e) => {
    // Write conditions to check for enter key if string input isnt empty
    if (e.keyCode === 13) {
      if ((text !== '') || (text !== headerTags)) {
        dispatch(addBlog({
          id, text,
        }));
        setText('');
      }
    }
  };
  return (
    <div className="user-input-container">
      <input
        type="text"
        placeholder="Type / for block, @ to link docs or people"
        onChange={onChangetext}
        onKeyDown={onPressEnter}
        className="addBlog-input-blog font"
      />
      { (text.startsWith('/1')) ? (
        <section className="input-header-choice-pop">
          <h1 className="input-header-choice-pop-h1h4 font">Add blocks</h1>
          <h4 className="input-header-choice-pop-h1h4 font">Keep trying to filter or escape to exit</h4>
          <h4 className="input-header-choice-pop-h1h4 font">
            Filtering Keyword
            <span className="span-pop-up-addBlog font">1</span>
          </h4>
          <ul className="input-pop-up-default-container">
            <li className="input-pop-up-default-li">
              <img className="ux-icons-font" src={fontType} alt="Font Type" />
              <div>
                <h1 className="input-pop-up-default-li-h1h4 font">Heading 1</h1>
                <h4 className="input-pop-up-default-li-h1h4 font">Shortcut: type # + space</h4>
              </div>
            </li>
            <li className="input-pop-up-default-li">
              <img className="ux-icons-font" src={fontType} alt="Font Type" />
              <div>
                <h1 className="input-pop-up-default-li-h1 font">Expendable Heading 1</h1>
                <h4 className="input-pop-up-default-li-h1h4 font">
                  Shortcut: type
                  {'>>'}
                  # + space
                </h4>
              </div>
            </li>
          </ul>
        </section>
      ) : null }
    </div>
  );
}
