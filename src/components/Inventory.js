import React, { useEffect } from 'react';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import firebaseApp, { base } from '../base';
import firebase from 'firebase';
import PropTypes from 'prop-types';

const Inventory = ({ fishes, addFish, loadSampleFishes, updateInventory, deleteFish, storeId, uid, setUid, owner, setOwner, flag, setFlag }) => {
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        authHandler({ user });
      }
    });
  }, []);

  const authHandler = async (authData) => {
    //Reset our flag every time we try to authenticate
    setFlag(false);

    // 1. Look up the current store in the firebase database
    const store = await base.fetch(`${storeId}`, {
      context: this
    });

    // 2. Claim the store if there is no owner
    if (!store.owner) {
      await base.post(`${storeId}/owner`, {
        data: authData.user.uid
      });
    }

    // 3. Set the state of the inventory component to reflect the current user
    setUid(authData.user.uid);
    setOwner(store.owner || authData.user.uid);
  };

  const authenticate = async (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();

    // Use a try catch block to gracefully handle authentication errors that occur using OAuth
    try {
      await firebaseApp
        .auth()
        .signInWithPopup(authProvider)
        .then((data) => authHandler(data));
    } catch (e) {
      // Set our flag so we can manage our components accordingly
      setFlag(true);
    }
  };

  //Log out handler
  const logout = async () => {
    //Firebase API for logging out
    await firebaseApp.auth().signOut();

    //Update our state, revert uid to null
    setUid(null);
    setFlag(false);
  };

  //Logout component
  const LogOut = () => {
    return <button onClick={logout}>Log out!</button>;
  };

  // RenderLogin component
  const RenderLogin = () => {
    // 1. Check if user is logged in
    if (!uid && !flag) {
      return <Login authenticate={authenticate} />;
    }
    // 2. Check if the user trying to log in is also the owner of the store
    else if (uid !== owner || flag === true) {
      return (
        <div>
          <p>Sorry, you are not the owner of this store.</p>
          <LogOut />
        </div>
      );
    }
    // 3. They must be the owner, so render the inventory
    else {
      return (
        <div className='inventory'>
          <h2>Inventory</h2>
          <LogOut />
          {Object.keys(fishes).map((key) => {
            return <EditFishForm key={key} index={key} fish={fishes[key]} updateInventory={updateInventory} deleteFish={deleteFish} />;
          })}
          <AddFishForm addFish={addFish} />
          <button onClick={loadSampleFishes}>Load sample fishes</button>
        </div>
      );
    }
  };

  return RenderLogin();
};

Inventory.propTypes = {
  fishes: PropTypes.object,
  addFish: PropTypes.func,
  loadSampleFishes: PropTypes.func,
  updateInventory: PropTypes.func,
  deleteFish: PropTypes.func,
  uid: PropTypes.string,
  setUid: PropTypes.func,
  owner: PropTypes.string,
  setOwner: PropTypes.func,
  flag: PropTypes.bool,
  setFlag: PropTypes.func
};

export default Inventory;
