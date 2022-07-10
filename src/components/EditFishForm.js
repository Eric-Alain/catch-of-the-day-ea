import React from 'react';
import PropTypes from 'prop-types';

const EditFishForm = ({ index, fish, updateInventory, deleteFish }) => {
  const { name, price, status, desc, image } = fish || {};

  const handleChange = (e) => {
    const updatedFish = { ...fish, [e.target.name]: e.target.value };
    updateInventory(index, updatedFish);    
  };

  return (
    <div className='fish-edit'>
      <input type='text' name='name' value={name} onChange={handleChange} />
      <input type='text' name='price' value={price} onChange={handleChange} />
      <select type='text' name='status' value={status} onChange={handleChange}>
        <option value='available'>Fresh!</option>
        <option value='unavailable'>Sold out!</option>
      </select>
      <textarea type='text' name='desc' value={desc} onChange={handleChange} />
      <input type='text' name='image' value={image} onChange={handleChange} />
      <button onClick={() => deleteFish(index)}>Remove fish</button>
    </div>
  );
};

EditFishForm.propTypes = {
  index: PropTypes.string,
  fish: PropTypes.object,
  updateInventory: PropTypes.func,
  deleteFish: PropTypes.func
};

export default EditFishForm;
