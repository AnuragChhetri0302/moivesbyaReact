import React, { useContext, useState } from "react";
import useFetch from "../hooks/useFetch";



const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  
  const [query, setQuery] = useState("avengers");
  const { isLoading, isError, movie } = useFetch(`&s=${query}`);
  return (
    <AppContext.Provider value={{ isLoading, isError, movie, query, setQuery }}>
      {children}
    </AppContext.Provider>
  );
};
// global custom hooks

export const useGlobalContext = () => {
  return useContext(AppContext);
};
