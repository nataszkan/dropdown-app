import React, { useState } from "react"


export default function Dropdown() {
  // eslint-disable-next-line no-undef
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div>
      <h1>menu</h1>
      <div>
        <button onClick={toggleDropdown}>...</button>
        {isOpen && (
          <div>
            <ul>
              <li>edit</li>
              <li>share</li>
              <li>delete</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}