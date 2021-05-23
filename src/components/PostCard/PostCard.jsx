import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { usePosts } from "../../hooks/usePosts";
import { List, Typography } from "antd";
import CommentItem from "../CommentItem/CommentItem";

const { Title } = Typography

export default function PostCard() {
  const { posts } = usePosts();
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const history = useHistory();

  useEffect(() => {
    if (postId) {
      const postItem = posts.find((post) => post.id === +postId);

      if(postItem) {
        setPost(postItem);
        setComments(postItem.comments);
      } else {
        history.push('/404')
      }
      
    }
  }, [postId]);

  return (
    <>
      <div className="post_card">
        <Title level={5}>{post.title}</Title>
      </div>
      <div className="post_comments">
        <Title level={5}>Comments of Post:</Title>
        <List
          itemLayout="horizontal"
          dataSource={comments}
          renderItem={(item) => (
            <List.Item>
              <CommentItem comment={item} />
            </List.Item>
          )}
        />
      </div>
    </>
  );
}
