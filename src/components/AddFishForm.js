import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const AddFishForm = ({ addFish }) => {
  const nameRef = useRef(null);
  const priceRef = useRef(null);
  const statusRef = useRef(null);
  const descRef = useRef(null);
  const imageRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const fish = {
      name: nameRef.current.value,
      price: parseFloat(priceRef.current.value),
      status: descRef.current.value,
      desc: descRef.current.value,
      image: imageRef.current.value
    };
    addFish(fish);
    e.currentTarget.reset();
  };

  return (
    <form className='fish-edit' onSubmit={handleSubmit}>
      <input ref={nameRef} name='name' type='text' placeholder='Name' />
      <input ref={priceRef} name='price' type='text' placeholder='Price' />
      <select ref={statusRef} name='status'>
        <option value='available'>Fresh!</option>
        <option value='unavailable'>Sold out!</option>
      </select>
      <textarea ref={descRef} name='desc'></textarea>
      <input ref={imageRef} name='image' type='text' placeholder='Image' />
      <button type='submit'>+ Add fish</button>
    </form>
  );
};

AddFishForm.propTypes = {  
  addFish: PropTypes.func
};

export default AddFishForm;
