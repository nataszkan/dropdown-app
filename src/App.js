import React, { Component } from 'react'
import Page from './components/Page';
import Card from './components/Card';
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
        <Page>
           <Card>
               <Dropdown title="Select action" items={actions1} />
           </Card>
        </Page>
       
      </>
    )
  }
}

export default App;
