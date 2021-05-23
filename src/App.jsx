import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from "./components/PostsList/PostsList";
import UserCard from "./components/UserCard/UserCard";
import PostCard from "./components/PostCard/PostCard";
import Undefined from "./components/Undefined/Undefined";

function App() {

  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route exact path="/">
            <PostsList />
          </Route>
          <Route path="/user/:userId">
            <UserCard />
          </Route>
          <Route path="/post/:postId">
            <PostCard />
          </Route>
          <Route path="/404">
            <Undefined />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;