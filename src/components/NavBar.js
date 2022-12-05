import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import '../styles/navbar.css';

export default function NavBar() {
  const [isOpen, isClosed] = useState();
  return (
    <div className="nav-container">
      <ul className="nav-logoSide-ul">
        <li className="nav-logoSide-li">
          <button className="nav-logoSide-ul-btn" type="button">{'>>'}</button>
        </li>
        <li className="nav-logoSide-li">
          <button className="nav-logoSide-ul-btn" type="button">📖Main /</button>
        </li>
        <li className="nav-logoSide-li">
          <button className="nav-logoSide-ul-btn" type="button">Getting Start /</button>
        </li>
        <li className="nav-logoSide-li">
          <button className="nav-logoSide-ul-btn" type="button">Front-end developer test project /</button>
        </li>
      </ul>
      <section className="for-phone">
        <Hamburger
          toggle={isClosed}
          toggled={isOpen}
        />
        { isOpen ? (
          <ul className="hamburger-ul">
            <li>
              <button className="hamburger-ul-btns" type="button" onClick={() => isClosed(false)}>🔓Editing</button>
            </li>
            <li>
              <button className="hamburger-ul-btns" type="button" onClick={() => isClosed(false)}>
                Publish Space
                <span className="span-v">v</span>
              </button>
            </li>
          </ul>
        ) : null}
      </section>
      <section className="for-desktop">
        <ul className="desk-right-ul">
          <li className="desk-right-ul-li">🔓Editing</li>
          <li className="desk-right-ul-li">
            Publish Space
            <span className="span-v">v</span>
          </li>
        </ul>
      </section>
    </div>
  );
}
