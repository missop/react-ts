import React, { Component, MouseEvent } from 'react'
import { isFunction } from '../utils'

const initialState = { show: false }
type State = Readonly<typeof initialState>
type Props = Partial<{
  children: RenderCallback
  render: RenderCallback
}>
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element
export type ToggleableComponentProps = { show: State['show']; toggle: Toggleable['toggle'] }

const updateShowState = (prevState: State) => ({
  show: !prevState.show
})
export default class Toggleable extends Component<Props, State> {
  readonly state: State = initialState
  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState)
  render() {
    const { children, render } = this.props
    const renderProps = { show: this.state.show, toggle: this.toggle }
    if (render) {
      return render(renderProps)
    }

    return isFunction(children) ? children(renderProps) : null
  }
}
