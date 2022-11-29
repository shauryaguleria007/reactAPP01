import React, { useState, useContext, useEffect } from "react";
import { useCallback } from "react";

const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [searchTerms, setSearchTerms] = useState("a");
  const [cocktails, setCocktails] = useState([]);

  const fetchDrinks = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetch(`${url}${searchTerms}`);
      const { drinks } = await data.json();
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
            item;

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          };
        });
        setCocktails(newCocktails);
      } else setCocktails([]);
      setLoading(false);
    } catch (error) {}
  }, [searchTerms]);

  useEffect(() => {
    fetchDrinks();
  }, [searchTerms, fetchDrinks]);
  return (
    <AppContext.Provider
      value={{
        loading,
        searchTerms,
        cocktails,
        setSearchTerms,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
