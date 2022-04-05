import React from 'react';
import './FormRowSelect.scss';

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
  return (
    <>
      <label htmlFor='tag' className='task-label'>
        {labelText || name}
      </label>
      <div class='select-wrapper'>
        <select
          class='select'
          name={name}
          value={value}
          onChange={handleChange}>
          {list.map((itemValue, index) => {
            return (
              <option key={index} value={itemValue}>
                {itemValue}
              </option>
            );
          })}
          {/* <option value='value1'>Fruits</option>
          <option value='value1'>Mango</option>
          <option value='value2'>Banana</option>
          <option value='value3'>Cherries</option> */}
        </select>
      </div>
    </>
  );
};

export default FormRowSelect;