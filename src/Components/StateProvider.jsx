import { createContext, useContext } from "react";
import { useReducer } from "react";

export const StateContext = createContext();


export const  StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value = {{myreducer : useReducer(reducer,initialState),initialState}}>
    {children}
</StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext);

