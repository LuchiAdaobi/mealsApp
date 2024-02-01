import { useGlobalContext } from "../context";

export default function Favorites() {
  const{favorites, handleSelectMeal, removeFromFavorites} = useGlobalContext()
  return (
    <section className="favorites">
      <div className="favorites-content">
        <h5>Favorites</h5>
        <div className="favorites-container">
          {favorites.map(item => {
            const{idMeal, strMealThumb: image,strMeal : title} = item

            return(
              <div key={idMeal} className="favorite-item">
                <img src={image} alt={title} className="favorites-img img" onClick={()=> handleSelectMeal(idMeal)}/>
                <button className="remove-btn" onClick={()=> removeFromFavorites(idMeal)}>remove</button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
