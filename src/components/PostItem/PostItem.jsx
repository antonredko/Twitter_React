import { List, Avatar, Space } from 'antd';
import { EditOutlined, LikeOutlined, MessageOutlined } from '@ant-design/icons';
import React from 'react'

// const { Meta } = Card

export default function PostItem({item, users, comments}) {

  const listData = {
    title: `<h2>${item.user?.name}</h2>`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description: `${item.title}`,
    content: `${item.body}`
  }

  const IconText = ({ icon, text }) => (
    <Space>
      {React.createElement(icon)}
      {text}
    </Space>
  )

  return (

    // <li className="post">
    //   <Card
    //     title={<h2>{item.user?.name}</h2>}
    //     actions={[
    //       <LikeOutlined />,
    //       <EditOutlined />,
    //       <MessageOutlined />
    //     ]}
    //   >
    //     <Meta
    //       title={item.title}
    //       description={item.body}
    //     />
    //   </Card>
    // </li>


    <List
      itemLayout="vertical"
      size="large"
      dataSource={listData}
      renderItem={item => (
        <List.Item
          // key={item.title}
          actions={[
            <IconText icon={LikeOutlined} text="" key="list-vertical-star-o" />,
            <IconText icon={EditOutlined} text="" key="list-vertical-like-o" />,
            <IconText icon={MessageOutlined} text={item.comments?.length} key="list-vertical-message" />,
          ]}
          // extra={
          //   <img
          //     width={272}
          //     alt="logo"
          //     src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
          //   />
          // }
        >
          <List.Item.Meta
            avatar={<Avatar src={item.avatar} />}
            title={<a href={item.href}>{item.title}</a>}
            description={item.description}
          />
            {item.content}
          </List.Item>
      )}
    />

  )
}