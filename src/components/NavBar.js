import Hamburger from 'hamburger-react';
import React, { useState } from 'react';
import '../styles/navbar.css';

export default function NavBar() {
  const [isOpen, isClosed] = useState();
  return (
    <div className="nav-container">
      <ul className="nav-logoSide-ul">
        <li>
          <button className="nav-logoSide-ul-btn" type="button">{'>> /'}</button>
        </li>
        <li>
          <button className="nav-logoSide-ul-btn" type="button">Main /</button>
        </li>
        <li>
          <button className="nav-logoSide-ul-btn" type="button">Getting Start /</button>
        </li>
        <li>
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
              <button type="button" onClick={() => isClosed(false)}>Editing</button>
            </li>
            <li>
              <button type="button" onClick={() => isClosed(false)}>Publish Space</button>
            </li>
          </ul>
        ) : null}
      </section>
      <section className="for-desktop">
        <ul className="desk-right-ul">
          <li>Editing</li>
          <li>Publish Space</li>
        </ul>
      </section>
    </div>
  );
}
