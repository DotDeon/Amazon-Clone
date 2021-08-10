import React, { createContext, useContext, useReducer } from "react";

//Prepare DataLayer
export const StateContext = createContext();

//Wrap our App & Provide Datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


//Pull Information
export const useStateValue = () => useContext(StateContext);
