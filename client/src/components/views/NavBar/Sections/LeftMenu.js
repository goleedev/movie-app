import React from 'react';
import { Menu } from 'antd';
import './Navbar.css'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
      <Menu.Item className="menu__page" key="favorite">
        <a href="/favorite">Favorite</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu