import React from "react";

interface IState {
  count:number
}

export default class Counter extends React.Component {
  public state: IState
  
  constructor(props: any) {
    super(props)
    this.state = {
      count: 0
    }
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
  }

  public increment():void {
    return this.setState({count: this.state.count + 1})
  }

  public decrement():void {
    return this.setState({count: this.state.count - 1})
  }

  render(): React.ReactNode {
      return (
        <>
          <h1 className="bg-red-500 font-mono">{this.state.count}</h1>
          <button onClick={this.increment}>+</button>
          <button onClick={this.decrement}>-</button>
        </>
      )
  }
}