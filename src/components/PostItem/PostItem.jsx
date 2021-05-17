import { Card, Space, Typography } from 'antd';
import { EditOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react'

const { Meta } = Card
const { Link } = Typography

export default function PostItem({item}) {

  return (

    <li className="post">
      <Card
        title={
          <Link href={`/user/${item.user.id}`} >
            {item.user?.name}
          </Link>
        }
        actions={[
          <LikeOutlined />,
          <EditOutlined />,
          <CardIcon
            icon={ <MessageOutlined /> }
            text={ item.comments?.length }
          />
        ]}
      >
        <Meta
          title={item.title}
          description={item.body}
        />
      </Card>
    </li>

  )
}

function CardIcon({icon, text}) {
  return (
    <>
      <Space>
        {icon}
        {text}
      </Space>
    </>
  )
}