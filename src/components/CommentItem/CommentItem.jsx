import React, { createElement, useState } from "react";
import { Comment, Tooltip, Avatar } from "antd";
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled, AntDesignOutlined } from "@ant-design/icons";

export default function CommentItem({ comment }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState("");

  const like = () => {
    setLikes(1);
    setDislikes(0);
    setAction("liked");
  };

  const dislike = () => {
    setLikes(0);
    setDislikes(1);
    setAction("disliked");
  };

  const actions = [
    <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === "liked" ? LikeFilled : LikeOutlined)}
        <span className="comment-action">{likes}</span>
      </span>
    </Tooltip>,
    <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(
          action === "disliked" ? DislikeFilled : DislikeOutlined
        )}
        <span className="comment-action">{dislikes}</span>
      </span>
    </Tooltip>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <Comment
      actions={actions}
      author={<span>{comment.email}</span>}
      avatar={
        <Avatar
          alt={comment.email}
          icon={<AntDesignOutlined />}
        />
      }
      content={
        <p>{comment.body}</p>
      }
    />
  );
};