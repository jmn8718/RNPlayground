import React, { createContext, useReducer } from 'react';

const initialState = {};

function reducer(state, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export const AppStoreContext = createContext(initialState);

export const AppStoreProvider = function ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStoreContext.Provider value={{ state, dispatch }}>
      {children}
    </AppStoreContext.Provider>
  );
};
