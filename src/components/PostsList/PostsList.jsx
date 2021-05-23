import React from "react";
import { usePosts } from "../../hooks/usePosts";
import PostItem from "../PostItem/PostItem";

export default function PostsList() {
  const { posts } = usePosts();

  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} item={post} />
      ))}
    </ul>
  );
}
