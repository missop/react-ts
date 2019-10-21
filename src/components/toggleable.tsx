import React, { Component, MouseEvent, ReactNode, ComponentType } from 'react'
import { isFunction } from '../utils'

const defaultProps = { props: {} as { [name: string]: any } }
type DefaultProps = typeof defaultProps

const initialState = { show: false }
type State = Readonly<typeof initialState>
type Props = Partial<
  {
    children: RenderCallback | ReactNode
    render: RenderCallback
    component: ComponentType<ToggleableComponentProps<any>>
  } & DefaultProps
>
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element
export type ToggleableComponentProps<P extends object = object> = { show: State['show']; toggle: Toggleable['toggle'] } & P

const updateShowState = (prevState: State) => ({
  show: !prevState.show
})
export default class Toggleable extends Component<Props, State> {
  readonly state: State = initialState
  private toggle = (event: MouseEvent<HTMLElement>) => this.setState(updateShowState)
  render() {
    const { component: InjectedComponent, children, render, props } = this.props
    const renderProps = { show: this.state.show, toggle: this.toggle }
    // 当使用 component 属性时，children 不是一个函数而是 ReactNode
    if (InjectedComponent) {
      return (
        <InjectedComponent {...props} {...renderProps}>
          {children}
        </InjectedComponent>
      )
    }

    // return isFunction(children) ? children(renderProps) : null
  }
}
