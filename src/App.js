import React, { Component } from 'react'
import Dropdown from './components/Dropdown';
import Card from './components/Card';

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
           <Card>
               <Dropdown title="Select action" items={actions1} />
           </Card>
        </div>
       
      </>
    )
  }
}

export default App;
