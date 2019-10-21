import React, { MouseEvent, ReactNode, SFC } from 'react'
import { withDefaultProps } from '../utils'

// click事件的定义与函数一致，需要定义如下内容:
// 1.参数event,event又是一个复杂类型，再次进行拆解,MouseEvent<HTMLElement>
// 2.返回值
// 改进:引入SFC模块：已经定义children 、displayName 和 defaultProps,去掉children的定义
export type ButtonProps = {
  handleClick(e: MouseEvent<HTMLElement>): void
  children?: ReactNode
  color?: string
}

// button组件，需要定义以下内容:1.onclick事件  2.子元素
const Button: SFC<ButtonProps> = ({ handleClick, children, color }: ButtonProps) => (
  <button onClick={handleClick} style={{ color }}>
    {children}
  </button>
)

const defaultProps = { color: 'red' }
// 带有默认值的button组件
const ButtonWithDefaultProps = withDefaultProps<ButtonProps>(defaultProps, ({ handleClick, children, color }: ButtonProps) => (
  <button onClick={handleClick} style={{ color }}>
    {children}
  </button>
))

export default Button
