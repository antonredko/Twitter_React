import "./App.css";
import React, { useState, useEffect } from "react";
import PostsList from "./components/PostsList/PostsList";

function App() {

  const [posts, setPosts] = useState([])
  const [users, setUsers] = useState([])
  const [comments, setComments] = useState([])

  useEffect(() => {
    (async (url) => {
      const data = await fetch(url).then(r => r.json())
      setPosts(data)
    })('http://jsonplaceholder.typicode.com/posts')
  }, [])

  useEffect(() => {
    (async (url) => {
      const data = await fetch(url).then(r => r.json())
      setUsers(data)
    })('http://jsonplaceholder.typicode.com/users')
  }, [])

  useEffect(() => {
    (async (url) => {
      const data = await fetch(url).then(r => r.json())
      setComments(data)
    })('http://jsonplaceholder.typicode.com/comments')
  }, [])
  
  return (
    <div className='container'>
      <PostsList posts={posts} users={users} comments={comments} />
    </div>
  );
}

export default App;