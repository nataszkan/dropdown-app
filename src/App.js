import React, { Component } from 'react'

class App extends Component {
  constructor() {
    super();
    
    this.state= {
      showMenu: false,
    }
    
    this.showMenu = this.showMenu.bind(this);
  }
  
  showMenu(event){
    event.preventDefault();
    
    this.setState({
      showMenu: true,
    });
  }
  
  render () {
    return (
      <div>
        <div>
          <button onClick={this.showMenu}>show menu</button>
        </div>
        
        {
          this.state.showMenu
          ? (
            <ul>
              <li><button>edit</button></li>
              <li><button>share</button></li>
              <li><button>delete</button></li>
            </ul>
          )
          : (
            null
          )
        }
      </div>
    )
  }
}

export default App;
