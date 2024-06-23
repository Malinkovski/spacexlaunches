import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import "../styles/main.scss";
import "aos/dist/aos.css";
import { ConfigProvider } from "antd";
import MainFooter from "./components/organisms/footer/Footer";
import ApolloWrapper from "@/graphql/ApolloWrapper";

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <ConfigProvider
        theme={{
          token: {
            colorTextBase: "#ffffff",
            colorPrimary: "cccccc",
            colorInfo: "#ffffff",
            colorLink: "#ffffff",
            fontSize: 18,
            wireframe: false,
            borderRadius: 1,
            sizeStep: 4,
            colorBgBase: "#000000",
            fontFamily: "Rajdhani, sans-serif",
          },
        }}
      >
        <ApolloWrapper>
          <AntdRegistry>
            {children}
            <MainFooter />
          </AntdRegistry>
        </ApolloWrapper>
      </ConfigProvider>
    </body>
  </html>
);

export default RootLayout;
