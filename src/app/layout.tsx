import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../styles/main.scss";
import { ConfigProvider } from "antd";
import Navbar from "@/components/organisms/navbar/Navbar";
import MainFooter from "@/components/organisms/footer/Footer";


const RootLayout = ({ children }: React.PropsWithChildren) => (

  <html lang="en">
    
    <body>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: "#ffffff",
            colorPrimary: "transparent",
            colorInfo: "#ffffff",
            colorLink: "#ffffff",
            fontSize: 18,
            wireframe: false,
            borderRadius: 1,
            sizeStep: 4,
            colorBgBase: "#000000",
            fontFamily: 'Rajdhani, sans-serif',
          },
        }}
      >
        <AntdRegistry>
          {children}
          <MainFooter text={`SPACEX © ${new Date().getFullYear()}`}/>
        </AntdRegistry>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;
