import React, { useState, useRef, useEffect } from 'react'

export default function Dropdown( { action, items = [] }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const dropdownRef = useRef();

  const handleOnClick = e => {
      if (dropdownRef.current.contains(e.target)) {
        return
      }
      setOpen(false);
  };
  
  useEffect(() => {
    document.addEventListener("click", handleOnClick)
    return () => {
      document.removeEventListener("click", handleOnClick)
    }
  }, [])
  
    return (
      <div ref={dropdownRef}>
        <button
          className="dropdown-toggle-button"
          tabIndex={0}
          onKeyPress={() => toggle(!open)}
          onClick={() => toggle(!open)}>
          {open ? 'close menu' : 'open menu'}
          
        </button>
        {open && (
          <ul className="dropdown-menu">
            {items.map(item => (
              <li key={item.id}>
                <button type="button" onClick={() => handleOnClick(item)}>{action}
                  <span>{item.action}</span></button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }