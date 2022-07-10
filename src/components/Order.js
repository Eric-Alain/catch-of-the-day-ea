import React from 'react';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

const Order = ({ fishes, order, removeFromOrder, uid, flag }) => {
  const orderIds = Object.keys(order);

  const total = orderIds.reduce((prev, key) => {
    const fish = fishes[key];
    const count = order[key];
    const isAvailable = fish && fish.status;

    if (isAvailable) {
      return prev + count * fish.price;
    }
    return prev;
  }, 0);
  return (
    <div className='order-wrap'>
      <h2>Order</h2>
      {/* Render content only if authenticated */}
      {uid && !flag ? (
        <>
          <TransitionGroup component='ul' className='order'>
            {orderIds.map((key) => {
              const fish = fishes[key];
              const count = order[key];
              const transitionOptions = {
                classNames: 'order',
                key,
                timeout: { enter: 250, exit: 250 }
              };

              if (!fish) return null;

              if (!fish.status === 'available') {
                return (
                  <CSSTransition {...transitionOptions}>
                    <li key={key}>{fish ? fish.name : 'fish'} is no longer available</li>
                  </CSSTransition>
                );
              }
              return (
                <CSSTransition {...transitionOptions}>
                  <li key={key}>
                    <span>
                      <TransitionGroup component='span' className='count'>
                        <CSSTransition classNames='count' key={count} timeout={{ enter: 250, exit: 250 }}>
                          <span>{count}</span>
                        </CSSTransition>
                      </TransitionGroup>
                      lbs {fish.name} {formatPrice(count * fish.price)}
                      <button onClick={() => removeFromOrder(key)}>&times;</button>
                    </span>
                  </li>
                </CSSTransition>
              );
            })}
          </TransitionGroup>

          <div className='total'>
            Total:
            <strong>{formatPrice(total)}</strong>
          </div>
        </>
      ) : null}
    </div>
  );
};

Order.propTypes = {
  fishes: PropTypes.shape({}),
  order: PropTypes.object,
  removeFromOrder: PropTypes.func,
  uid: PropTypes.string,
  flag: PropTypes.bool
};

export default Order;
