"use client";
import React, { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import styles from "./navbar.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "@/components/atoms/logo/Logo";
import NavFooter from "@/components/organisms/navfooter/NavFooter";
import Link from "next/link";

const { Header } = Layout;

const menuItems = [
  { key: "1", label: "Home" },
  { key: "2", label: "About" },
  { key: "3", label: "Launches" },
];

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const showLoading = () => {
    setOpen(true);
  };

  return (
    <Header className={styles.header}>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.menu}
        items={menuItems.map((item) => ({
          key: item.key,
          className: "link",
          label: item.label,
          onClick: () =>
            (window.location.href = `#${item.label.toLowerCase()}`),
        }))}
      ></Menu>
      <Button className={styles.burgerMenu} type="text" onClick={showLoading}>
        <MenuOutlined />
      </Button>
      <Drawer
        closable
        destroyOnClose
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        className={styles.drawer}
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]} 
          className={styles.menuMobile}
          onClick={() => setOpen(false)}
          items={menuItems.map((item) => ({
            key: item.key,
            className: "link",
            label: item.label,
            onClick: () =>
              (window.location.href = `#${item.label.toLowerCase()}`),
          }))}
        ></Menu>
        <NavFooter text={`SpaceX © ${new Date().getFullYear()}`} />
      </Drawer>
    </Header>
  );
};

export default Navbar;
