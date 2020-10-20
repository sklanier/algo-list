import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  algos: [
    {
      id: 1,
      name: "Box Blur",
      language: "JavaScript",
      rating: "Difficult"
    }
  ]
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function removeAlgo(id) {
    dispatch({
      type: "REMOVE_ALGO",
      payload: id
    });
  }

  function addAlgo(algo) {
    dispatch({
      type: "ADD_ALGO",
      payload: algo
    });
  }

  function editAlgo(algo) {
    dispatch({
      type: "EDIT_EMPLOYEE",
      payload: algo
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        algo: state.algo,
        removeAlgo,
        addAlgo,
        editAlgo
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};