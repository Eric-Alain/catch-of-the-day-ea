import React, { useRef } from 'react';
import { getFunName } from '../helpers';
import PropTypes from 'prop-types';

const StorePicker = ({ history }) => {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/store/${inputRef.current.value}`);
  };

  return (
    <>
      <p>Fish!</p>
      <form className='store-selector' onSubmit={handleSubmit}>
        <h2>Please enter a store</h2>
        <input type='text' required placeholder='Store name' defaultValue={getFunName()} ref={inputRef} />
        <button type='submit'>Visit store</button>
      </form>
    </>
  );
};

StorePicker.propTypes = {
  history: PropTypes.object
};

export default StorePicker;
