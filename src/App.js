import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,

    }
  }
  render() {
    return (
     <div>
       <h1>0</h1>
       <button className='btn btn-info'>+</button>
       <button className='btn btn-info'>-</button>
       <input type="number"/>
     </div>
    );
  }
}

export default App;
