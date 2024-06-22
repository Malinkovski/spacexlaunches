"use client";
import React from "react";
import { LikeOutlined, MessageOutlined, StarOutlined } from "@ant-design/icons";
import { Avatar, List, Space } from "antd";

const data = Array.from({ length: 50 }).map((_, i) => ({
  title: `Commenter ${i + 1}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description: "Mncididunt ut labore et dolore magna aliqua.",
  content:
    "lorem ipsum dolor sit amet, consectetur adipiscing ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor elit, sed do eiusmod,ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor tempor incididunt ut labore et dolore magna aliqua.",
}));

const IconText = ({ icon, text }: { icon: React.FC; text: string }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const Comments: React.FC = () => (
  <List
    itemLayout="vertical"
    size="large"
    pagination={{
      pageSize: 4,
    }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item
        key={item.title}
        actions={[
          <IconText
            icon={StarOutlined}
            text="156"
            key="list-vertical-star-o"
          />,
          <IconText
            icon={LikeOutlined}
            text="156"
            key="list-vertical-like-o"
          />,
          <IconText
            icon={MessageOutlined}
            text="2"
            key="list-vertical-message"
          />,
        ]}
      >
        <List.Item.Meta
          avatar={<Avatar src={item.avatar} />}
          title={<span>{item.title}</span>}
          description={item.description}
        />
        {item.content}
      </List.Item>
    )}
  />
);

export default Comments;
