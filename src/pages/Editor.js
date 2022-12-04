import React from 'react';
import EditorMain from '../components/EditorMain';
import threeDots from '../components/images/three-dots.png';
import downArrow from '../components/images/bottom-left-arrow.png';
import redBunny from '../components/images/red-rabbit.png';
import timer from '../components/images/timer.png';
import '../styles/editor.css';

export default function Editor() {
  return (
    <div className="editor-container">
      <ul className="editor-header">
        <li>
          <h4>P</h4>
        </li>
        <li>
          <span>
            <img className="ux-icons" src={timer} alt="Timer" />
            0 min
          </span>
        </li>
        <li>
          <img className="ux-icons" src={redBunny} alt="red-bunny" />
        </li>
        <li>
          <span>
            <img className="ux-icons" src={downArrow} alt="Bottom left pointing arrow" />
            0
          </span>
        </li>
        <li>
          <input className="editor-header-input" type="text" />
        </li>
        <li>
          ✅
        </li>
        <li>
          ☁️
        </li>
        <li>
          <img className="ux-icons" src={threeDots} alt="Delete Pop Up" />
        </li>
      </ul>
      <EditorMain />
    </div>
  );
}
