import React, { Component } from 'react'
import Dropdown from './components/Dropdown';

  const actions1 = [
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

  const actions2 = [
  {
    id: 1,
    action: 'settings', 
  },
    {
    id: 2,
    action: 'account', 
  },
    {
    id: 3,
    action: 'help', 
  },
]

class App extends Component {

  render () {
    return (
      <>
        <div className="page">
          <div className="card">
          <Dropdown title="Select action" items={actions1} />
          </div>
        </div>
      </>
    )
  }
}

export default App;
