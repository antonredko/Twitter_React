import { Card, Space, Typography } from 'antd';
import { EditOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react'
import { usePosts } from '../../hooks/usePosts';
import { useHistory } from 'react-router';

const { Meta } = Card
const { Link } = Typography

export default function PostItem({item}) {
  const history = useHistory()
  const { postsAction } = usePosts()

  return (

    <li className="post">
      <Card
        title={
          <Link
            onClick={() => {
              history.push(`/user/${item.user.id}`)
              postsAction({type: 'user', payload: {
                user: item.user
              }})
            }}
          >
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