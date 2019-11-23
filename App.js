import logo from './logo.svg';
import './App.css';
import BritishPound from './BritishPound'
import React, {Component} from 'react'

class App extends Component{
  constructor() {
    super()
    this.state = {
      counter: 1
    }
    this.incrementByOne = this.incrementByOne.bind(this)
  }

  incrementByOne() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  convertMulti = () => {
    this.setState({
      counter: this.state.counter * 6.94
    })
  }

render() {
  var  newBritishPound= " ";
  return (
    <div className="App">
      <p>

     <button onClick={this.convertMulti}>Convert</button>
     BritishPound:  <BritishPound newBritishPound={newBritishPound} />
     {this.state.counter}<br/>

     American Dollar:
      </p>
    </div>
  );
}
}
export default App;
