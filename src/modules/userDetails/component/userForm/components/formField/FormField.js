import React from 'react';
import './FormField.scss';

const FormField = (props) => {
  const {icon, data, data1, data2, data3, data4, name} = props
  return (
    <div className="field">
      <div className="field__icon">
        <div>{icon}</div>
      </div>
      <div className="field__content">
        <div className="field__data">{data}</div>
        <div className="field__data"><span>{data1}</span><span>{data2}</span></div>
        <div className="field__data"><span>{data3}</span><span>{data4}</span></div>
        <div className="field__name">{name}</div>
      </div>
    </div>
  )         
}

export { FormField };