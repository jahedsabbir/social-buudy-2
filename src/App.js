import React from 'react';
import './App.css';
import Home from './components/Home/Home';
import { Router} from "@reach/router";
import NoMatch from './components/NoMatch/NoMatch';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
  return (
    <div>
    <Router>
      <Home path="/" />
      <PostDetails path="/post/:postId" />
      <NoMatch default />
    </Router>
    </div>
  );
}

export default App;
