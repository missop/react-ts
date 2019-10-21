import React, { SFC } from 'react'
import Toggleable from './toggleable'
import MenuItem from './menu-item'

type MenuItemProps = { title: string }
type ToggleableMenuProps = MenuItemProps

const ToggleableWithTitle = Toggleable.ofType<MenuItemProps>()
const ToggleableMenuViaInjection: SFC<ToggleableMenuProps> = ({ title, children }) => (
  <ToggleableWithTitle component={MenuItem} props={{ title }}>
    {children}
  </ToggleableWithTitle>
)

const Menu = () => (
  <>
    <ToggleableMenuViaInjection title='First Menu'>Some Content</ToggleableMenuViaInjection>
    <ToggleableMenuViaInjection title='Second Menu'>Some content</ToggleableMenuViaInjection>
    <ToggleableMenuViaInjection title='Third Menu'>Other Content</ToggleableMenuViaInjection>
  </>
)

export default Menu
