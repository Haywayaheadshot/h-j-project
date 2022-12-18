import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/switch.css';

function Switch() {
  const [day, night] = useState(false);
  const { body } = document;
  return (
    <div>
      <label htmlFor="switch-app" className="switch-label-app">
        {!day && (
          body.classList.add('day'),
          body.classList.remove('night')
        )}
        {day && (
          body.classList.replace('day', 'night')
        )}
        <input onClick={() => night((day) => !day)} className="switch-input-app" id="switch-app" type="checkbox" />
        <span className="switch-slider-app" />
      </label>
    </div>
  );
}

export default Switch;
