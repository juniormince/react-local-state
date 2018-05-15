import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { user: 'black panther', city: 'wakanda' };

    // makes 'this' in handleChange the same as
    // 'this' in the constructor
    // similar to const self=this
    // this.handleChange = this.handleChange.bind(this); --you'll see this in older code
    // now can you an arrow function (below)
  }

  handleChange = (event) => {
    // console.log('input was changed');
    // console.log('event.target', event.target);
    console.log('event.target.value', event.target.value);
    this.setState({user: event.target.value});
  }

  secondHandle = (event) => {
    console.log('event.target.value', event.target.value);
    this.setState({city: event.target.value});
  }

  handleClick = () => {
    console.log(this.state);
  }

  render() {
    return (
      <div>
        the current user is {this.state.user} and he lives in {this.state.city}
        {/* JSON.stringify(this.state) -- just to splat objects on DOM/see what's inside*/}
        <p/>
        <input onChange={this.handleChange} placeholder="User Name"/>
        <input onChange={this.secondHandle} placeholder="City"/>
        <button onClick={this.handleClick}>ENTER IF YOU DARE</button>
      </div>
    );
  }
}

export default App;
