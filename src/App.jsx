import "./App.css";
import React from "react";
import PostsList from "./components/PostsList/PostsList";
import { usePosts } from "./hooks/usePosts";
import { useUsers } from "./hooks/useUsers";
import { useComments } from "./hooks/useComments";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const {posts} = usePosts([])
  const {users} = useUsers([])
  const {comments} = useComments([])
  
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path="/">
            <PostsList posts={posts} users={users} comments={comments} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;