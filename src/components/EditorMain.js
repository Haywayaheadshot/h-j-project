import React from 'react';
import '../styles/editor-main.css';

export default function EditorMain() {
  return (
    <div className="editor-main-container">
      <h1 className="editor-main-header">
        Front-end developer test project
      </h1>
      <p className="editor-main-paragraph">
        Your goal is to make a page that looks
        exactly like this one, and has the ability
        to create a H1 text simply by typing them / 1,
        then typing text then hitting enter.
      </p>
      <section className="display-blogs-ul">
        <ul className="display-blogs">
          <li>Blog 1</li>
        </ul>
      </section>
      <section>
        <input type="text" />
      </section>
    </div>
  );
}
