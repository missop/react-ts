import React, { SFC } from 'react'
import Toggleable from './toggleable'
import MenuItem from './menu-item'

type Props = { title: string }
const ToggleableMenuViaInjection: SFC<Props> = ({ title, children }) => (
  <Toggleable component={MenuItem} props={{ title }}>
    {children}
  </Toggleable>
)

const Menu = () => (
  <>
    <ToggleableMenuViaInjection title='First Menu'>Some Content</ToggleableMenuViaInjection>
    <ToggleableMenuViaInjection title='Second Menu'>Some content</ToggleableMenuViaInjection>
    <ToggleableMenuViaInjection title='Third Menu'>Other Content</ToggleableMenuViaInjection>
  </>
)

export default Menu
