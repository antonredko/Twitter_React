import "./App.css";
import React from "react";
import PostsList from "./components/PostsList/PostsList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  
  return (
    <Router>
      <div className='container'>
        <Switch>
          <Route path="/">
            <PostsList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;