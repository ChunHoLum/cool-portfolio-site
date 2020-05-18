import React, { useState } from 'react';
import './setting-button.scss'
import { Menu, Dropdown, Button, Popover } from 'antd';
import { SettingOutlined } from '@ant-design/icons';

const SettingButton = ({ visible, hide, appRef, themePreference }) => {
  const [localThemePreference, setLocalThemePreference] = useState(themePreference);
  const clickDarkButton = () => {
    appRef.current.classList.replace('light', 'dark');
    setLocalThemePreference('dark');
  }
  const clickLightButton = () => {
    appRef.current.classList.replace('dark', 'light');
    setLocalThemePreference('light');
  }
  const menu = (
    <Menu selectedKeys={[localThemePreference]}>

      <Menu.Item key="light" onClick={clickLightButton} >
        Light Theme
      </Menu.Item>
      <Menu.Item key="dark" onClick={clickDarkButton} >
        Dark Theme
      </Menu.Item>
    </Menu>
  );
  return (
    <Popover
      placement="left"
      content="⚡ You don't know the power of the dark side. "
      trigger="click"
      visible={visible}
      onVisibleChange={hide}
      className="float-button"
    >
      <Dropdown overlay={menu} placement="topCenter" className="dropdowntheme">
        <Button type="primary" shape="circle" icon={<SettingOutlined />} size="large" />
      </Dropdown>
    </Popover>

  );
}

export default SettingButton