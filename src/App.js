import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { Provider } from 'react-redux';
import { store } from './reducer/carReducer';

const App = () => {
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  console.log("store: ", store);
  return (
    <Provider store={store}>
      <div className="boxes">
        <div className="box">
          <Header />
          {/* <Header car={state.car} />
          <AddedFeatures car={state.car} /> */}
        </div>
        <div className="box">
          {/* <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
          <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
        </div>
      </div>
    </Provider>
  );
};

export default App;
