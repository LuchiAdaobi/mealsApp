import { useGlobalContext } from "../context";

export default function Modal() {
  const { selectedMeal, closeModal } = useGlobalContext();
  const {
    strMealThumb: image,
    strMeal: title,
    strInstructions: text,
    strSource: source,
  } = selectedMeal;
  return (
    <aside className="modal-overlay">
      <button className="btn btn-hipster close-btn" onClick={closeModal}>
        Close
      </button>
      <div className="modal-container">
        <img src={image} alt={title} className="img modal-img" />
        <div className="modal-content">
          <h4>{title}</h4>
          <p>Cooking Instructions</p>
          <p>{text}</p>
          <a href={source} target="_blank">
            0riginal Source
          </a>
        </div>
      </div>
    </aside>
  );
}
