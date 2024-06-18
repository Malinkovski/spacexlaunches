"use client";
import React, { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./navbar.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "../../../components/atoms/logo/Logo";
import NavFooter from "../../../components/organisms/navfooter/NavFooter";
import { HomeItems, DetailItems } from "../../../utilities/navbarItems"; // Combine imports

interface NavbarProps {
  navbarFor: "home" | "details";
}

const Navbar = ({ navbarFor }: NavbarProps) => {
  const [open, setOpen] = useState<boolean>(false);

  const showLoading = () => {
    setOpen(true);
  };

  const items = navbarFor === "details" ? DetailItems : HomeItems;

  return (
    <Header className={styles.header}>
      <Logo />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        className={styles.menu}
        items={items.map((item) => ({
          key: item.key,
          className: "link",
          label: item.label,
          onClick: () => (window.location.href = item.href.toLowerCase()),
        }))}
      />
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
          items={items.map((item) => ({
            key: item.key,
            className: "link",
            label: item.label,
            onClick: () => (window.location.href = item.href.toLowerCase()),
          }))}
        />
        <NavFooter text={`SpaceX © ${new Date().getFullYear()}`} />
      </Drawer>
    </Header>
  );
};

export default Navbar;
