import React, { useState, useEffect } from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import firebaseApp from '../base';
import PropTypes from 'prop-types';

const App = ({ match }) => {
  const [state, setState] = useState({
    fishes: {},
    order: {}
  });

  const [flag, setFlag] = useState(false);
  const [typing, setTyping] = useState(false);
  const [uid, setUid] = useState(null);
  const [owner, setOwner] = useState(null);

  useEffect(() => {
    const localStorageRef = localStorage.getItem(match.params.storeId);
    if (localStorageRef) {
      setState((prev) => {
        return {
          ...prev,
          order: JSON.parse(localStorageRef)
        };
      });
    }

    firebaseApp
      .database()
      .ref(`${match.params.storeId}/fishes`)
      .on('value', (snapshot) => {
        if (snapshot.val())
          setState((prev) => {
            return {
              ...prev,
              fishes: snapshot.val()
            };
          });
      });
  }, []);

  useEffect(() => {
    firebaseApp.database().ref(`${match.params.storeId}/fishes`).update(state.fishes);
  }, [state.fishes]);

  //ComponentDidUpdate
  useEffect(() => {
    localStorage.setItem(match.params.storeId, JSON.stringify(state.order));
  });

  /******************/
  /**FISH FUNCTIONS**/
  /******************/
  const addFish = (fish) => {
    const fishes = { ...state.fishes };
    fishes[`fish${Date.now()}`] = fish;

    setState((prev) => {
      return {
        ...prev,
        fishes: fishes
      };
    });
  };

  const loadSampleFishes = () => {
    setState((prev) => {
      return {
        ...prev,
        fishes: sampleFishes
      };
    });
  };

  const deleteFish = (key) => {
    const fishes = { ...state.fishes };
    fishes[key] = null;

    setState((prev) => {
      return {
        ...prev,
        fishes: fishes
      };
    });
  };

  /*******************/
  /**ORDER FUNCTIONS**/
  /*******************/
  const addToOrder = (key) => {
    const order = { ...state.order };
    order[key] = order[key] + 1 || 1;

    setState((prev) => {
      return {
        ...prev,
        order: order
      };
    });
  };

  const removeFromOrder = (key) => {
    const order = { ...state.order };
    delete order[key];

    setState((prev) => {
      return {
        ...prev,
        order: order
      };
    });
  };

  /***********************/
  /**INVENTORY FUNCTIONS**/
  /***********************/
  const updateInventory = (index, fishObj) => {
    const fishes = { ...state.fishes };
    fishes[index] = fishObj;
    setState((prev) => {
      return {
        ...prev,
        fishes: fishes
      };
    });
  };

  return (
    <>
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='Fresh Seafood Market' />

          {/* Render content only if authenticated */}
          {uid && !flag ? (
            <ul className='fishes'>
              {Object.keys(state.fishes).map((key) => {
                return <Fish key={key} index={key} details={state.fishes[key]} addToOrder={addToOrder} />;
              })}
            </ul>
          ) : null}
        </div>

        <Order fishes={state.fishes} order={state.order} removeFromOrder={removeFromOrder} uid={uid} flag={flag} />
        <Inventory
          fishes={state.fishes}
          addFish={addFish}
          loadSampleFishes={loadSampleFishes}
          updateInventory={updateInventory}
          deleteFish={deleteFish}
          storeId={match.params.storeId}
          uid={uid}
          setUid={setUid}
          owner={owner}
          setOwner={setOwner}
          flag={flag}
          setFlag={setFlag}
        />
      </div>
    </>
  );
};

App.propTypes = {
  match: PropTypes.object
};

export default App;
