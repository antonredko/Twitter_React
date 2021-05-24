import { List, Typography } from "antd";
import React from "react";
import { usePosts } from "../../hooks/usePosts";
import PostItem from "../PostItem/PostItem";

const { Title } = Typography

export default function PostsList() {
  const { posts } = usePosts();

  return (
    <>
      <Title>PostsList</Title>
      <List
        itemLayout="horizontal"
        dataSource={posts}
        renderItem={(post) => (
          <List.Item>
            <PostItem item={post} />
          </List.Item>
        )}
      />
    </>
  );
}
