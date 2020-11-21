import React, { useState } from 'react'


export default function Dropdown( { action, items = [] }) {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  function handleOnClick(item) {
    
  }
  
  return (
    <div>
        <button 
        tabIndex={0} 
        onKeyPress={()=> toggle(!open)} 
        onClick={() => toggle(!open)}>
          {open ? 'close menu' : 'open menu'}
        </button>
        {open && (
            <ul>
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