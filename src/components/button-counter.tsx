import React, { Component } from 'react'
import Button from './button'

// 设置初始值state,readOnly的state设置
const initialState = { count: 0 }

type ButtonCounterState = Readonly<typeof initialState>

export default class ButtonCounter extends Component<object, ButtonCounterState> {
  readonly state: ButtonCounterState = initialState

  //   会报错
  /*   doSomethingWrong() {
    this.state.count = 1
  } */

  handleCulculate = (changeNum: number): void => {
    const { count } = this.state
    this.setState({ count: count + changeNum })
  }

  render() {
    const { count } = this.state
    return (
      <>
        <Button handleClick={() => this.handleCulculate(1)}>增加</Button>
        <Button handleClick={() => this.handleCulculate(-1)}>减少</Button>
        clicked {count} times
      </>
    )
  }
}
