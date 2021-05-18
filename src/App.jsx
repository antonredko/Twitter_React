import "./App.css";
import React from "react";
import PostsList from "./components/PostsList/PostsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserCard from "./components/UserCard/UserCard";
import { usePosts } from "./hooks/usePosts";

function App() {
  const { posts } = usePosts();

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