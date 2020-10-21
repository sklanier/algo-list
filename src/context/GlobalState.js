import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    algos: [
        { id: 1, name: 'Box Blur', language: 'JavaScript', rating: 'Hard' }
    ]
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeAlgo(id) {
        dispatch({
            type: 'REMOVE_ALGO',
            payload: id
        });
    };

    function addAlgo(algos) {
        dispatch({
            type: 'ADD_ALGOS',
            payload: algos
        });
    };

    function editAlgo(algos) {
        dispatch({
            type: 'EDIT_ALGO',
            payload: algos
        });
    };

    return (<GlobalContext.Provider value={{
        algos: state.algos,
        removeAlgo,
        addAlgo,
        editAlgo
    }}>
        {children}
    </GlobalContext.Provider>);
}