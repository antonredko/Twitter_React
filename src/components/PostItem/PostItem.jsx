import { Card, Space, Typography } from 'antd';
import { EditOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react'
import { usePosts } from '../../hooks/usePosts';
import { useHistory } from 'react-router';
// import { useUsers } from '../../hooks/useUsers';

const { Meta } = Card
const { Link } = Typography

export default function PostItem({item}) {
  const history = useHistory()
  const { postsAction } = usePosts()
  // const { usersAction } = useUsers()

  return (

    <li className="post">
      <Card
        title={
          <Link
            onClick={() => {
              history.push(`/user/${item.user.id}`)
              postsAction({type: 'user', payload: {
                id: item.userId
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