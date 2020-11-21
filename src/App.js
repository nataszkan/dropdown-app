import React, { Component } from 'react'
import Dropdown from './components/Dropdown';

  const items = [
  {
    id: 1,
    action: 'edit', 
  },
    {
    id: 2,
    action: 'share', 
  },
    {
    id: 3,
    action: 'delete', 
  },
]

class App extends Component {

  render () {
    return (
      <div>
        <Dropdown title="Select action" items={items} />
      </div>
    )
  }
}

export default App;
