"use client";
import React, { useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import styles from "./navbar.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "@/components/atoms/Logo/Logo";
import NavFooter from "@/components/organisms/Footer/NavFooter";
import Link from "next/link";

const { Header } = Layout;

const menuItems = [
  { key: "1", label: <Link href="/">Home</Link> },
  { key: "2", label: <Link href="/about">About</Link> },
  { key: "3", label: <Link href="/launches">Launches</Link> },
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
        items={menuItems}
        className={styles.menu}
      />
      <Button className={styles.burgerMenu} type="text" onClick={showLoading}>
        <MenuOutlined />
      </Button>
      <Drawer
        closable
        destroyOnClose
        title={<span>Menu</span>}
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        className={styles.drawer}
      >
        <Menu
          theme="dark"
          mode="vertical"
          defaultSelectedKeys={["1"]}
          items={menuItems}
          className={styles.menuMobile}
          onClick={() => setOpen(false)}
        />
        <NavFooter text={`SpaceX © ${new Date().getFullYear()}`} />
      </Drawer>
    </Header>
  );
};

export default Navbar;
