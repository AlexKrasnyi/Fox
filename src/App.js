import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './modules/header/Header';
import PostsList from './modules/postsList/PostsList';
import TodoList from './modules/todoList/TodoList';
import UsersList from './modules/usersList/UsersList';
import Article from  './modules/article/Article';
import Error404 from './modules/Error404/Error404';
import { UserDetails } from './modules/userDetails/UserDetails';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path='/' exact component={Article} />
          <Route path='/posts' component={PostsList}/>
          <Route path='/todos' component={TodoList}/>
          <Route path='/users/' exact component={UsersList}/>
          <Route path='/users/:id' component={ UserDetails }/> 
          <Route component={Error404} />          
        </Switch>
      </div>
    </Router>
  )
}

export default App;
