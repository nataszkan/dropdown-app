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

class App extends Component {

  render () {
    return (
      <>
        <div className="page">
          <div className="card">
            <div className="card-content">
            </div>
            <div className="card-actions">
               <Dropdown title="Select action" items={actions1} />
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default App;
