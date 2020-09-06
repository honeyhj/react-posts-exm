import React, { useState, useEffect, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import PostDetails from './Components/Home/PostDetails/PostDetails';
export const PostsContext = createContext();
function App() {
  /*       UseState     */
  const [posts,setPosts] = useState([]);
  /*       UseEffect     */
  useEffect(()=>{
    const postLink = 'https://jsonplaceholder.typicode.com/posts';
    fetch(postLink)
    .then(res=>res.json())
    .then(data => setPosts(data))
  },[]);

  return (
    <div className="App">
      <PostsContext.Provider value ={posts}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
            <Home></Home>
            </Route>
            <Route path="/PostDetails/:postId">
              <PostDetails></PostDetails>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </PostsContext.Provider>
    </div>
  );
}

export default App;
