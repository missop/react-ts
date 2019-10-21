import React, { SFC } from 'react'
import Toggleable from './toggleable'

type Props = { title: string }
const ToggleableMenu: SFC<Props> = ({ title, children }) => (
  <Toggleable
    render={({ show, toggle }) => (
      <>
        <div onClick={toggle}>
          <h1>{title}</h1>
        </div>
        {show ? children : null}
      </>
    )}
  />
)

const Menu = () => (
  <>
    <ToggleableMenu title='First Menu'>Some Content</ToggleableMenu>
    <ToggleableMenu title='Second Menu'>Some content</ToggleableMenu>
    <ToggleableMenu title='Third Menu'>Other Content</ToggleableMenu>
  </>
)

export default Menu
