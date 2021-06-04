import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PlaceholderList from './components/PlaceholderList';
import Post from './components/Post';

import './App.css';

const App = () => {
  return (
    <div>
      <Router>
        {/* navbar */}
        <Switch>
          <Route exact path='/' component={PlaceholderList} />
          <Route exact path='/post/:postId' component={Post} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
