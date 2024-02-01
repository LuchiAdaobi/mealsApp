import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //   STATE
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  // VARIABLES

  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealsUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      } else{
        setMeals([])
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  //   USEEFFECT
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  return (
    <AppContext.Provider value={{ meals, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
