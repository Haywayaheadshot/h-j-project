import React from 'react';
import EditorMain from '../components/EditorMain';
import threeDots from '../components/images/three-dots.png';
import downArrow from '../components/images/bottom-left-arrow.png';
import redBunny from '../components/images/red-rabbit.png';
import timer from '../components/images/timer.png';
import checkMark from '../components/images/check-mark.png';
import '../styles/editor.css';

export default function Editor() {
  return (
    <div className="editor-container">
      <ul className="editor-header">
        <li className="editor-header-li">
          <h4>P</h4>
        </li>
        <li className="editor-header-li">
          <span>
            <img className="ux-icons" src={timer} alt="Timer" />
            0 min
          </span>
        </li>
        <li className="editor-header-li">
          <img className="ux-icons" src={redBunny} alt="red-bunny" />
        </li>
        <li className="editor-header-li">
          <span>
            <img className="ux-icons" src={downArrow} alt="Bottom left pointing arrow" />
            0
          </span>
        </li>
        <li className="editor-header-li">
          <input className="editor-header-input" placeholder="Search...." type="text" />
        </li>
        <li className="editor-header-li">
          <img className="ux-icons" src={checkMark} alt="Check mark" />
        </li>
        <li className="editor-header-li">
          ☁️
        </li>
        <li className="editor-header-li">
          <img className="ux-icons" src={threeDots} alt="Delete Pop Up" />
        </li>
      </ul>
      <EditorMain />
    </div>
  );
}
