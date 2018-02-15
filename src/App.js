import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0,
      value: 1

    }
    this.increase = this.increase.bind(this);

    this.handleValueChange = this.handleValueChange.bind(this);

    this.decrease = this.decrease.bind(this);

    this.reset = this.reset.bind(this);

  }
increase(){
  this.setState({
    count: this.state.count + this.state.value
  });
}
decrease(){
  this.setState({
    count: this.state.count - this.state.value
  });
}
reset(){
  this.setState({
    count: this.state.count = 0
  });
}
handleValueChange(e){
  this.setState({
    value: +e.target.value
  });
}



  render() {
    return (
     <div className='container bg-color'>
       <h1 className='h1-color'>{this.state.count}</h1>
       <button className="btn-primary" onClick={this.reset}>RESET</button>
       <button className='btn btn-info' onClick={this.increase}>+</button>
       <button className='btn btn-info' onClick={this.decrease}>-</button>
       <input type="number" className='form-control' onChange={this.handleValueChange} value={this.state.value}/>
     </div>
    );
  }
}

export default App;
