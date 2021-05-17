import "./App.css";
import React, { useEffect, useState } from "react";
import PostsList from "./components/PostsList/PostsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCard from "./components/UserCard/UserCard";
import getData from "./api/getData"

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
      getData('http://jsonplaceholder.typicode.com/posts?_expand=user&_embed=comments', data => setPosts(data))
  }, [])

  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path="/">
            <PostsList posts={posts} />
          </Route>
          <Route path="/user/:userId">
            <UserCard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;