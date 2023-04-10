import React, { createContext, useReducer } from "react";

export const ContextFavs = createContext({});

const handleFavs = (state, action) => {
  switch (action.type) {
    case "ADD":
      localStorage.setItem(
        "favorito",
        JSON.stringify([...state.data, action.payload])
      );
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DISADD":
      const resultado = state.data.filter(
        (elemento) => elemento.id !== action.payload.id
      );
      localStorage.setItem("favorito", JSON.stringify(resultado));
      return {
        ...state,
        data: resultado,
      };

    default:
      return {
        ...state,
      };
  }
};

const ContextFavsProvider = ({ children }) => {
  const initialState = { data: [] };
  const [state, dispatch] = useReducer(handleFavs, initialState);

  const State = {
    state,
    dispatch,
  };

  return <ContextFavs.Provider value={State}>{children}</ContextFavs.Provider>;
};

export default ContextFavsProvider;
