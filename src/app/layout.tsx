import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../styles/main.scss";
import { ConfigProvider } from "antd";
import Navbar from "@/components/organisms/Navbar/Navbar";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: "#ffffff",
            colorPrimary: "#000000",
            colorInfo: "#ffffff",
            colorLink: "#1677ff",
            fontSize: 16,
            wireframe: false,
            borderRadius: 1,
            sizeStep: 4,
            colorBgBase: "#000000",
            fontFamily: "Segoe UI",
          },
        }}
      >
        <AntdRegistry>
          <Navbar />
          {children}
        </AntdRegistry>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;
