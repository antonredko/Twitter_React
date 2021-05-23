import { Avatar, Card, Space, Typography } from "antd";
import { AntDesignOutlined, EditOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";

const { Meta } = Card;
const { Link, Paragraph, Title } = Typography;

export default function PostItem({ item }) {
  const history = useHistory()
  const [text, setText] = useState(item.body)

  return (
    <li className="post">
      <Card
        title={
            <>
              
              <Title level={5}>
                <Link onClick={() => history.push(`/user/${item.user?.id}`)} >
                  <Avatar icon={<AntDesignOutlined />} alt={item.user?.name} />
                  {item.user?.name}
                </Link>
              </Title>
            </>
        }
        actions={[
          <LikeOutlined />,
          // <EditOutlined key="edit" />,
          <Link onClick={() => history.push(`/post/${item.id}`)} >
            <CardIcon icon={<MessageOutlined />} text={item.comments?.length} />
          </Link>
        ]}
        hoverable={true}
      >
        <Meta
          title={<Title level={5}>{item.title}</Title>}
          description={
            <Paragraph editable={{
              tooltip: "Edit the text",
              onChange: setText,
            }}>
              {text}
            </Paragraph>
          }
        />
      </Card>
    </li>
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
