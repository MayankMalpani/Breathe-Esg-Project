import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

const Header: React.FC = () => (
  <Menu mode="horizontal">
    <Menu.Item key="tracker">
      <Link to="/tracker">Tracker</Link>
    </Menu.Item>
    <Menu.Item key="data-entry">
      <Link to="/data-entry">Data Entry</Link>
    </Menu.Item>
  </Menu>
);

export default Header;
