import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  //   STATE
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // VARIABLES

  const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
  const randomMealUrl = "https://www.themealdb.com/api/json/v1/1/random.php";

  // FUNCTION

  const fetchMeals = async (url) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
      }
    } catch (error) {
      console.log(error.response);
    }
    setLoading(false);
  };

  function fetchRandomMeal() {
    fetchMeals(randomMealUrl);
  }

  function handleSelectMeal(idMeal, favorites) {
    let meal;

    meal = meals.find((meal) => meal.idMeal === idMeal);

    setSelectedMeal(meal);
    setShowModal(true);
  }
  function closeModal() {
    setShowModal(false);
  }
  function addToFavorites(idMeal) {
    console.log(idMeal);
    const alreadyFav = favorites.find((favMeal) => favMeal.idMeal === idMeal);
    if (alreadyFav) return;
    const meal = meals.find((meal) => meal.idMeal === idMeal);

    const updateFavorites = [...favorites, meal];
    setFavorites(updateFavorites);
  }
  function removeFromFavorites(idMeal) {
    const updateFavorites = favorites.filter((meal) => meal.idMeal !== idMeal);
    setFavorites(updateFavorites);
  }

  //   USEEFFECT
  useEffect(() => {
    fetchMeals(allMealsUrl);
  }, []);

  useEffect(() => {
    if (!searchTerm) return;
    fetchMeals(`${allMealsUrl}${searchTerm}`);
  }, [searchTerm]);

  return (
    <AppContext.Provider
      value={{
        meals,
        loading,
        setSearchTerm,
        fetchRandomMeal,
        showModal,
        selectedMeal,
        handleSelectMeal,
        closeModal,
        addToFavorites,
        removeFromFavorites,
        favorites
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export function useGlobalContext() {
  return useContext(AppContext);
}

export { AppContext, AppProvider };
