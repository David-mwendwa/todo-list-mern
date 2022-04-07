import React from 'react';
import './FormRow.scss';

const FormRow = ({
  type,
  value,
  name,
  labelText,
  placeholder,
  handleChange,
}) => {
  return (
    <>
      <label htmlFor={name} className='task-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        value={value}
        name={name}
        className='task-info-input task-input'
        placeholder={placeholder}
        onChange={handleChange}
      />
    </>
  );
};

export default FormRow;
