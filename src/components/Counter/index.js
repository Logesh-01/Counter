import { Component } from "react"

import "./index.css"

class Counter extends Component {
  state = { count: 0 }
  onIncrement = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }))
  }
  onDecrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }))
  }
  render() {
    const { count } = this.state
    return (
      <div className="main-con">
        <h1 className="counter">Count {count}</h1>
        <button className="increase-button" onClick={this.onIncrement}>
          Increase
        </button>
        <button className="decrease-button" onClick={this.onDecrement}>
          Decrease
        </button>
      </div>
    )
  }
}

export default Counter