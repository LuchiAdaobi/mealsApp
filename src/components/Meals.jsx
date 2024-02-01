import { useGlobalContext } from "../context";
import { BsHandThumbsUp } from "react-icons/bs";

export default function Meals() {
  const { meals, loading, handleSelectMeal, addToFavorites, removeFromFavorites } = useGlobalContext();

  return (
    <section className="section-center">
      {loading ? (
        <h4>Loading...</h4>
      ) 
      : meals.length < 1 ? (
        <h4 className="section">No meals matched your search term. Please try again.</h4>
      ) 
      : (
        meals.map((singleMeal) => {
          const { idMeal, strMeal: title, strMealThumb: image } = singleMeal;
          return (
            <article key={idMeal} className="single-meal">
              <img src={image} alt={title} className="img" onClick={()=> handleSelectMeal(idMeal)}/>
              <footer>
                <h5>{title}</h5>
                <button className="like-btn">
                  <BsHandThumbsUp onClick={()=> addToFavorites(idMeal)}/>
                </button>
              </footer>
            </article>
          );
        })
      )}
    </section>
  );
}
