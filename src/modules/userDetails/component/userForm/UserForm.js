import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';import './UserForm.scss';
import { FormField } from './components/formField/FormField';
import { userData } from '../../userActions/userActions';
import './UserForm.scss';

const UserForm = () => {

  const dispatch = useDispatch();
  const {id} = useParams();
  
  useEffect(() => {
    dispatch(userData(`https://jsonplaceholder.typicode.com/users/${id}`))
  }, [dispatch, id]);

  const user = useSelector(state => state.reducerUser);

  if(user.length === 0){
    return <h1 className="loader">Loading ...</h1>
  }

  return (
    <div className="userForm">
      <FormField
        icon={<i className="fas fa-envelope"></i>}
        data ={user.email}
        name = 'email'
      />
      <FormField 
        icon={<i className="fas fa-phone-alt"></i>}
        data ={user.phone}
        name = 'mobile'
      /> 
      <FormField
        icon={<i className="fas fa-map-marker-alt"></i>}
        data1 ={user.address.suite}
        data2 ={user.address.street}
        data3 ={user.address.city}
        data4 ={user.address.zipcode}
        name = 'work'
      />   
      <FormField 
        icon={<i className="fab fa-instagram-square"></i>}
        data = {<p>@{user.website}</p>}
        name = 'Social Channels'
      />   
      <FormField
        icon={<i className="fas fa-project-diagram"></i>}
        data1 ={user.company.bs}
        data3 ={user.company.catchPhrase}
        name = 'Segments'
      />   
    </div>
  )
}

export { UserForm };
