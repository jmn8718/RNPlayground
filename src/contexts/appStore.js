import React, { createContext, useReducer } from 'react';

const initialState = {
  user: null,
  provider: '',
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload.user,
        provider: action.payload.provider,
      };
    case 'CLEAR_USER':
      return {
        ...state,
        user: null,
        provider: '',
      };
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
