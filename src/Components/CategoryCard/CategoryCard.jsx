/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const CategoryCard = ({ category }) => {
  const { id, picture, title, category_card } = category || {};
  return (
    <div>
      <Link to={`/card/${id}`}>
        <div className="rounded-xl" style={{ backgroundColor: category.card_bg }}>
        <figure>
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <span
            className="px-2 py-2 font-bold rounded-md w-[50%] text-center"
            style={{
              backgroundColor: category.category_card_bg,
              color: category.text_button_bg,
            }}
          >
            {category_card}
          </span>
          <h2 className="card-title font-bold" style={{ color: category.text_button_bg}}>{title}</h2>
        </div>
      </div>
      </Link>
    </div>
  );
};

export default CategoryCard;

CategoryCard.propType = {
    category: PropTypes.object,
    card_bg: PropTypes.string,
}
