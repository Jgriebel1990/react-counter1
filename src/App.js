import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  render() {
    return (
     <div>
       <button className='btn btn-info'>+</button>
       <button className='btn btn-info'>-</button>
     </div>
    );
  }
}

export default App;
