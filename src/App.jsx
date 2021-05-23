import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PostsList from "./components/PostsList/PostsList";
import UserCard from "./components/UserCard/UserCard";
import PostCard from "./components/PostCard/PostCard";
import NotFound from "./components/Undefined/NotFound";
// import { red, volcano, gold, yellow, lime, green, cyan, blue, geekblue, purple, magenta, grey } from '@ant-design/colors';
import { generate, presetDarkPalettes } from '@ant-design/colors';

const colors = generate('#fc792d', {
  theme: 'dark',
  backgroundColor: '#141414'
});
console.dir(colors);

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
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;