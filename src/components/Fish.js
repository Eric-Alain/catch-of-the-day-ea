import React from 'react';
import { formatPrice } from '../helpers';
import PropTypes from 'prop-types';

const Fish = ({ details, addToOrder, index }) => {
  const { name, price, status, desc, image } = details || {};
  const isAvailable = status === 'available';

  const handleClick = () => {
    addToOrder(index);
  };

  return (
    <div className='single-fish'>
      <li className='menu-fish'>
        <img src={image} alt={name} />
        <h3 className='fish-name'>
          {name}
          <span className='price'>{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={handleClick}>
          {isAvailable ? 'Add to order' : 'Sold out!'}
        </button>
      </li>
    </div>
  );
};

Fish.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.string,
    desc: PropTypes.string,
    image: PropTypes.string
  }),
  addToOrder: PropTypes.func,
  index: PropTypes.string
};

export default Fish;
