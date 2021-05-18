import React from "react";
import { Menu } from "antd";
import { Link } from "@reach/router";
import { ProjectOutlined, UnorderedListOutlined } from "@ant-design/icons";

const AppHeader = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="mail" icon={<ProjectOutlined />}>
        <Link to="catalog" href="#">
          Catalog
        </Link>
      </Menu.Item>
      <Menu.Item key="grid" icon={<UnorderedListOutlined />}>
        <Link to="grid" href="#">
          Grid
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default AppHeader;
