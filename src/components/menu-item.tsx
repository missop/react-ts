import React, { SFC } from 'react'
import { ToggleableComponentProps } from './toggleable'
type MenuItemProps = { title: string }

const MenuItem: SFC<ToggleableComponentProps & MenuItemProps> = ({ title, toggle, children, show }) => (
  <>
    <div onClick={toggle}>
      <h1>{title}</h1>
    </div>
    {show ? children : null}
  </>
)

export default MenuItem
