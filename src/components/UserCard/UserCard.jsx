import { MessageOutlined } from "@ant-design/icons";
import { Card, Input, List, Typography } from "antd";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import getData from "../../api/getData";
// import { usePosts } from "../../hooks/usePosts";
import { CardIcon } from "../PostItem/PostItem";

const { Title } = Typography;

export default function UserCard() {
  // const { posts } = usePosts()
  const { userId } = useParams();
  const [user, setUser] = useState({});
  const [userPosts, setUserPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    // if(userId) {
    //   const postItem = posts.find(post => post.user?.id === +userId)
    //   const postsOfUser = posts.filter(post => post.userId === +userId)
    //   if(postItem) {
    //     setUser(postItem.user)
    //     setUserPosts(postsOfUser)
    //   } else {
    //     history.push('/404')
    //   }

    userId &&
      getData(`http://jsonplaceholder.typicode.com/users/${userId}`, (data) =>
        setUser(data)
      );
    userId &&
      getData(
        `http://jsonplaceholder.typicode.com/posts?userId=${userId}&_embed=comments`,
        (data) => setUserPosts(data)
      );
  }, [userId]);

  return (
    <>
      <Title level={3} className="user_title">
        UserCard
      </Title>
      <div className="user_description">
        {user.name && <Input addonBefore="Name" value={user.name} readOnly />}
        {user.username && (
          <Input addonBefore="Username" value={user.username} readOnly />
        )}
        {user.email && (
          <Input addonBefore="Email" value={user.email} readOnly />
        )}
        {user.website && (
          <Input addonBefore="Website" value={user.website} readOnly />
        )}
        {user.phone && (
          <Input addonBefore="Phone" value={user.phone} readOnly />
        )}
        {user.address && (
          <div className="user_description_item">
            <Title level={5} className="user_description_item_title">
              Address:
            </Title>
            <div>
              {user.address?.street && (
                <Input
                  addonBefore="Street"
                  value={user.address?.street}
                  readOnly
                />
              )}
              {user.address?.suite && (
                <Input
                  addonBefore="Suite"
                  value={user.address?.suite}
                  readOnly
                />
              )}
              {user.address?.city && (
                <Input addonBefore="City" value={user.address?.city} readOnly />
              )}
              {user.address?.zipcode && (
                <Input
                  addonBefore="Zipcode"
                  value={user.address?.zipcode}
                  readOnly
                />
              )}
            </div>
          </div>
        )}
        {user.address?.geo && (
          <div className="user_description_item">
            <Title level={5} className="user_description_item_title">
              Geolocation:
            </Title>
            <div>
              <Input
                addonBefore="Latitude"
                value={user.address?.geo?.lat}
                readOnly
              />
              <Input
                addonBefore="Longitude"
                value={user.address?.geo?.lng}
                readOnly
              />
            </div>
          </div>
        )}
        {user.company && (
          <div className="user_description_item">
            <Title level={5} className="user_description_item_title">
              Company:
            </Title>
            <div>
              <Input addonBefore="Name" value={user.company?.name} readOnly />
              {user.company?.catchPhrase && (
                <Input
                  addonBefore="Catch Phrase"
                  value={user.company?.catchPhrase}
                  readOnly
                />
              )}
              {user.company?.bs && (
                <Input addonBefore="Bs" value={user.company?.bs} readOnly />
              )}
            </div>
          </div>
        )}
      </div>
      {!!userPosts.length && (
        <div className="user_posts">
          <Title level={4} className="user_posts_title">
            {user.name ? `Posts of ${user.name}` : "Posts of user"}:
          </Title>
          <List
            className="user_posts_list"
            itemLayout="horizontal"
            dataSource={userPosts}
            renderItem={(post) => (
              <List.Item>
                <Card
                  className="user_posts_item"
                  type="inner"
                  title={post.title}
                  extra={
                    <Link to={`/post/${post?.id}`}>
                      <CardIcon
                        icon={<MessageOutlined />}
                        text={post.comments?.length}
                      />
                    </Link>
                  }
                  hoverable={true}
                >
                  {post.body}
                </Card>
              </List.Item>
            )}
          />
        </div>
      )}
    </>
  );
}
