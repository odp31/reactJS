import React, { Component } from 'react';

// simple class component with State and Props
class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Hello!',
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}{this.props.name}!</h1>
        <p>Count: {this.state.count}</p>
        <button onClick = {this.handleClick}>Increment</button>
      </div>
      );
  }
}

//another class with lifecycle methods

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
    };
    this.intervalId = null;
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        time: prevState.time + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
        <h2>Time: {this.state.time} seconds </h2>
      </div>
      );
  }
}

// component handling form input
class InputExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <input
          type = "text"
          value = {this.state.inputValue}
          onChange = {this.handleChange}
          placeholder = "Enter something..."
          />
        <p>You typed: {this.state.inputValue}</p>
      </div>
      );
  }
}

// parent component using above components
class App extends Component {
  render() {
    return(
      <div>
        <Greeting name = "World" />
        <Timer />
        <InputExample/>
      </div>
      );
  }
}

export default App; 
