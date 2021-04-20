import React from 'react';
import { Field, reduxForm } from 'redux-form';
import './InputForm.scss';

const InputForm = props => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field name='post' component='input' type='text'/>
      <button className='formButton'>ADD</button>
    </form>
  )
}

export  default reduxForm({
    form : 'add'
})(InputForm);