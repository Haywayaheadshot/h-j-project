import React from 'react';
import EditorMain from '../components/EditorMain';
import '../styles/editor.css';

export default function Editor() {
  return (
    <div className="editor-container">
      <ul className="editor-header">
        <li>
          <h4>P</h4>
        </li>
        <li>
          <h4>0min</h4>
        </li>
        <li>
          <img src="" alt="red-bunny" />
        </li>
        <li>
          <h2>0</h2>
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
          <div className="editor-header-three-dots">
            .
            .
            .
          </div>
        </li>
      </ul>
      <EditorMain />
    </div>
  );
}
