import React from 'react';

function Dropdown(props) {
  return (
    <div>
      {props.isVisible ? (
        <ul>
          <li>Option 1</li>
          <li>Option 2</li>
          <li>Option 3</li>
        </ul>
      ) : null}
    </div>
  );
}

export default Dropdown;