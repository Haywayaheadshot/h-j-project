import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBlog } from '../../redux/editor/Editor';
import fontType from '../images/font-size.png';
import '../../styles/add-blog.css';

export default function AddBlog() {
  const [text, setText] = useState('');
  const [placeHolder, setPlaceHolder] = useState('Type / for block, @ to link docs or people');
  const dispatch = useDispatch();
  // Use uuid to create unique ids
  const uId = uuid();
  const id = uId.slice(0, 8);

  const onChangetext = (e) => {
    // Set value of text
    setText(e.target.value);
  };
  const startTextInput = text.slice(0, 2);

  const onPressEnter = (e) => {
    // Write conditions to check for enter key if string input isnt empty
    if (e.keyCode === 13) {
      if ((text !== '') && (text !== '/1') && (text !== '/2') && (text !== '/3') && (text !== '/4') && (text !== '/5') && (text !== '/6')) {
        dispatch(addBlog({
          id, text,
        }));
        setText('');
        setPlaceHolder('Type / for block, @ to link docs or people');
      }
    }
  };

  const onPopUpClickHandler = () => {
    // Change the placed holder of the input to header
    // setPlaceHolder(startTextInput.slice(0));
    // Change the the tagName to the header shortcode

    // clear the input field
    setText('');

    // Set the place holder
    setPlaceHolder(`Heading ${startTextInput.slice(1)}`);
  };

  return (
    <div className="user-input-container">
      <input
        type="text"
        value={text}
        placeholder={placeHolder}
        onChange={onChangetext}
        onKeyDown={onPressEnter}
        className="addBlog-input-blog font"
      />
      {/* // Display if user starts with command "/1" to "/6" */}
      { ((startTextInput === '/1') || (startTextInput === '/2') || (startTextInput === '/3') || (startTextInput === '/4') || (startTextInput === '/5') || (startTextInput === '/6')) ? (
        <section className="input-header-choice-pop">
          <h1 className="input-header-choice-pop-h1h4 font">Add blocks</h1>
          <h4 className="input-header-choice-pop-h1h4 font">Keep trying to filter or escape to exit</h4>
          <h4 className="input-header-choice-pop-h1h4 font">
            Filtering Keyword
            <span className="span-pop-up-addBlog font">
              {startTextInput.slice(1, 2)}
            </span>
          </h4>
          <ul className="input-pop-up-default-container">
            <li>
              <button className="input-pop-up-default-li" type="button" onClick={() => onPopUpClickHandler()}>
                <img className="ux-icons-font" src={fontType} alt="Font Type" />
                <div>
                  <h1 className="input-pop-up-default-li-h1h4 font">
                    Heading
                    <span className="span-header-choice">{startTextInput.slice(1, 2)}</span>
                  </h1>
                </div>
              </button>
            </li>
          </ul>
        </section>
      ) : null }
    </div>
  );
}
