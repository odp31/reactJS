import React from 'react'
import ReactDOM from 'react-dom'

class ChildComponent extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.age}</p>
      </div>
      )
  }
}

class ParentComponent extends React.Component{
  render() {
    return (
      <div>
        <ChildComponent name = 'John' age = '30' />
        <ChildComponent name = 'Mary' age = '25'/>
      </div>
      )
  }
}
