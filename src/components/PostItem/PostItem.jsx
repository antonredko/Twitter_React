import { Card, Space, Typography } from "antd";
import { EditOutlined, LikeOutlined, MessageOutlined } from "@ant-design/icons";
import React from "react";
import { useHistory } from "react-router";

const { Meta } = Card;
const { Link } = Typography;

export default function PostItem({ item }) {
  const history = useHistory()

  return (
    <li className="post">
      <Card
        title={
          <Link onClick={() => history.push(`/user/${item.user?.id}`)} >
            {item.user?.name}
          </Link>
        }
        actions={[
          <LikeOutlined />,
          <EditOutlined />,
          <Link onClick={() => history.push(`/post/${item.id}`)} >
            <CardIcon icon={<MessageOutlined />} text={item.comments?.length} />
          </Link>
        ]}
      >
        <Meta title={item.title} description={item.body} />
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
