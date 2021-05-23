import { MessageOutlined } from "@ant-design/icons";
import { Card, Input } from "antd";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import getData from "../../api/getData";
import { usePosts } from "../../hooks/usePosts";
import { CardIcon } from "../PostItem/PostItem"

export default function UserCard() {
  const { posts } = usePosts()
  const { userId } = useParams()
  const [user, setUser] = useState({})
  const [userPosts, setUserPosts] = useState([])
  const history = useHistory()
  
  useEffect(() => {
    // if(userId) {
    //   const postItem = posts.find(post => post.user?.id === +userId)
    //   if(postItem) {
    //     setUser(postItem.user)
        // setUserPosts()
      // } else {
      //   history.push('/404')
      // }

      userId && getData(`http://jsonplaceholder.typicode.com/users/${userId}`, (data) => setUser(data))
      userId && getData(`http://jsonplaceholder.typicode.com/posts?userId=${userId}&_embed=comments`, (data) => setUserPosts(data))
  }, [userId])

  return (
    <>
      <h1 className="user_title">UserCard</h1>
      <div className="user_description">
      {user.name && <Input addonBefore="Name" value={user.name} readOnly />}
        <Input addonBefore="Username" value={user.username || '---'} readOnly />
        <Input addonBefore="Email" value={user.email || '---'} readOnly />
        <Input addonBefore="Website" value={user.website || '---'} readOnly />
        <Input addonBefore="Phone" value={user.phone || '---'} readOnly />
        <div className="user_description_item">
          <h3 className="user_description_item_title">Address:</h3>
          <div>
            <Input addonBefore="Street" value={user.address?.street || '---'} readOnly />
            <Input addonBefore="Suite" value={user.address?.suite || '---'} readOnly />
            <Input addonBefore="City" value={user.address?.city || '---'} readOnly />
            <Input addonBefore="Zipcode" value={user.address?.zipcode || '---'} readOnly />
          </div>
        </div>
        <div className="user_description_item">
          <h3 className="user_description_item_title">Geolocation:</h3>
          <div>
            <Input addonBefore="Latitude" value={user.address?.geo?.lat || '---'} readOnly />
            <Input addonBefore="Longitude" value={user.address?.geo?.lng || '---'} readOnly />
          </div>
        </div>
        <div className="user_description_item">
          <h3 className="user_description_item_title">Company:</h3>
          <div>
            <Input addonBefore="Name" value={user.company?.name || '---'} readOnly />
            <Input addonBefore="Catch Phrase" value={user.company?.catchPhrase || '---'} readOnly />
            <Input addonBefore="Bs" value={user.company?.bs || '---'} readOnly />
          </div>
        </div>
      </div>
      {userPosts && <div className="user_posts">
        <h2 className="user_posts_title">Posts of {user.name}:</h2>
        <ul className="user_posts_list">
          {userPosts.map((post) => (
              <li className="user_posts_item" key={post.id}>
                <Card
                  type="inner"
                  title={post.title}
                  extra={
                    <Link to={`/post/${post?.id}`} >
                      <CardIcon icon={<MessageOutlined />} text={post.comments?.length} />
                    </Link>
                  }
                >
                  {post.body}
                </Card>
              </li>
          ))}
        </ul>
      </div>}
    </>
  );
}