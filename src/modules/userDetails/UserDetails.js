import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import { NavTab, RoutedTabs } from 'react-router-tabs';
import { UserForm } from '../userDetails/component/userForm/UserForm';
import { userData } from '../userDetails/userActions/userActions';
import UserAlbums from '../userDetails/component/userAlbums/UserAlbums';
import UserPosts from '../userDetails/component/userPosts/UserPosts';
import UserTodos from '../userDetails/component/userTodos/UserTodos';
import './UserDetails.scss';

const UserDetails = () => {
  const {path, url} = useRouteMatch();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(userData(`https://jsonplaceholder.typicode.com/users/${id}`))
  }, [dispatch, id])

	const user = useSelector(state => state.reducerUser);

  return (
    <div className="userDetails">
      <RoutedTabs
        tabClassName="tab-userDetails__tab"
        activeTabClassName="userDetails__tab-active"
      >               
        <NavTab to={`${url}/albums`} className="userDetails__tab">Albums</NavTab>
        <NavTab to={`${url}/todos`} className="userDetails__tab">Todos</NavTab>
        <NavTab to={`${url}/posts`} className="userDetails__tab">Posts</NavTab>
      </RoutedTabs>
			<div className="userDetails__nameWrap">
			<Link to={`${url}`} className="userDetails__name"><span className="userDetails__title">Name:</span> {user.name}</Link>
			</div>
    	<div>
				<Switch>
          <Route path={`${path}`} exact component={UserForm}></Route> 
          <Route path={`${path}/albums`} component={UserAlbums}></Route>
          <Route path={`${path}/todos`} component={UserTodos}></Route>
          <Route path={`${path}/posts`} component={UserPosts}></Route>
				</Switch>
    	</div>            
  	</div>
	)
}

export { UserDetails };
