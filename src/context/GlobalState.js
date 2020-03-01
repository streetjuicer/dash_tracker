import React, { createContent, useReducer } from "react";
import AppReducer from './AppReducer';

//inital state
const initialState = {
  transactions: [
    { id: 1, text: "ETH buy", amount: -2000 },
    { id: 2, text: "ETH sell", amount: 2064 },
    { id: 3, text: "SAD lamp", amount: -30 },
    { id: 4, text: "farmers market", amount: -45 }
  ]
};

//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = children => {
    const [ state, dispatch] = useReducer{AppReducer, initalState};

    return(<GlobalContext.Provider 
    value={
        { transactions: state.transactions }
        }>
        {children}
        </GlobalContext.Provider>);

};
