import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../styles/main.scss";
import { ConfigProvider } from "antd";
import Navbar from "@/components/organisms/Navbar/Navbar";
import MainFooter from "@/components/organisms/Footer/Footer";

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
            fontFamily: 'Rajdhani, sans-serif',
          },
        }}
      >
        <AntdRegistry>
          <Navbar />
          {children}
          <MainFooter text={`SPACEX © ${new Date().getFullYear()}`}/>
        </AntdRegistry>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;
