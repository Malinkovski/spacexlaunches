"use client";
import React, { useState } from "react";
import { Button, Drawer, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import styles from "./navbar.module.scss";
import { MenuOutlined } from "@ant-design/icons";
import Logo from "@/components/atoms/logo/Logo";
import NavFooter from "@/components/organisms/navfooter/NavFooter";
import { homeItems } from "@/utilities/navbarItems";
import { detailItems } from "@/utilities/navbarItems";

interface NavbarProps {
  navbarFor: "home" | "details";
}

const Navbar = ({ navbarFor }: NavbarProps) => {
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
        items={(navbarFor === "details" ? detailItems : homeItems).map((item) => ({
          key: item.key,
          className: "link",
          label: item.label,
          onClick: () => (window.location.href = `${item.href.toLowerCase()}`),
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
          items={(navbarFor === "home" ? homeItems : detailItems).map((item) => ({
            key: item.key,
            className: "link",
            label: item.label,
            onClick: () =>
              (window.location.href = `${item.href.toLowerCase()}`),
          }))}
        ></Menu>
        <NavFooter text={`SpaceX © ${new Date().getFullYear()}`} />
      </Drawer>
    </Header>
  );
};

export default Navbar;
