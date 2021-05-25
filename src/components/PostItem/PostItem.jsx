import { Avatar, Card, Space, Typography } from "antd";
import {
  AntDesignOutlined,
  EditOutlined,
  LikeOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";

const { Meta } = Card;
const { Link, Paragraph, Title } = Typography;

export default function PostItem({ item }) {
  const history = useHistory();
  const [text, setText] = useState(item.body);
  const [editing, setEditing] = useState(false)

  function aaa() {
    setText(text)
  }

  return (
    <Card
      title={
        <>
          <Title level={5}>
            <Link onClick={() => history.push(`/user/${item.user?.id}`)}>
              <Avatar icon={<AntDesignOutlined />} alt={item.user?.name} />
              {item.user?.name}
            </Link>
          </Title>
        </>
      }
      actions={[
        <LikeOutlined />,
        <EditOutlined onClick={() => setEditing(!editing)} />,
        <Link onClick={() => history.push(`/post/${item.id}`)}>
          <CardIcon icon={<MessageOutlined />} text={item.comments?.length} />
        </Link>,
      ]}
      hoverable={true}
    >
      <Meta
        // title={<Title level={5}>{item.title}</Title>}
        description={
          <Paragraph
            editable={{
              icon: <></>,
              tooltip: "Edit the text",
              onChange: setText,
              autoSize: true,
              editing: editing,
              onCancel: aaa()
            }}
          >
            {text}
          </Paragraph>
        }
      />
    </Card>
  );
}

export function CardIcon({ icon, text }) {
  return (
    <>
      <Space>
        {icon}
        {text}
      </Space>
    </>
  );
}
