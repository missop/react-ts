import React, { Component, MouseEvent, ReactNode, ComponentType } from 'react'
import { isFunction } from '../utils'

declare type Constructor<T = {}> = new (...args: any[]) => T
type DefaultProps<P extends object = object> = { props: P }
const defaultProps: DefaultProps = { props: {} }

const initialState = { show: false }
type State = Readonly<typeof initialState>
type Props<P extends object = object> = Partial<
  {
    children: RenderCallback | ReactNode
    render: RenderCallback
    component: ComponentType<ToggleableComponentProps<P>>
  } & DefaultProps<P>
>
type RenderCallback = (args: ToggleableComponentProps) => JSX.Element
export type ToggleableComponentProps<P extends object = object> = { show: State['show']; toggle: Toggleable['toggle'] } & P

const updateShowState = (prevState: State) => ({
  show: !prevState.show
})
export default class Toggleable<T extends object = object> extends Component<Props<T>, State> {
  static ofType<T extends object>() {
    return Toggleable as Constructor<Toggleable<T>>
  }
  static readonly defaultProps: Props = defaultProps
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

    if (render) {
      return render(renderProps)
    }

    return isFunction(children) ? children(renderProps) : null
  }
}
