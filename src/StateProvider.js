import React, { createContext, useContext, useReducer} from "react";


export const StateContext = createContext();

 const StateProvider =({reducer, initialState, children})=> (
//use the state provider to wrap our app
    <StateContext.Provider value ={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
//when ever we want to pull something from the data app we use this useState value hook
export const useStateValue =()=> useContext(StateContext);
export default StateProvider;