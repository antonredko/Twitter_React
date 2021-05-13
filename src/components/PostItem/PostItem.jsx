import { Card, Space } from 'antd';
import { EditOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react'

const { Meta } = Card

export default function PostItem({item, users, comments}) {

  return (

    <li className="post">
      <Card
        title={<h2>{item.user?.name}</h2>}
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