import PropTypes from "prop-types";
import CategoryCard from "../CategoryCard/CategoryCard";
const Category = ({ categorys }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14">
        {
            categorys?.data?.map(category => <CategoryCard key={category.id} category={category}></CategoryCard>)
        }
    </div>
  )
};

export default Category;

Category.propTypes = {
    categorys: PropTypes.object,
}