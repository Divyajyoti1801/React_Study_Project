import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  CategoriesContainer,
  CategoryBodyContainer,
  DirectoryItemContainer,
} from "./directory-item.style.jsx";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <CategoriesContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryBodyContainer className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </CategoryBodyContainer>
    </CategoriesContainer>
  );
};

export default DirectoryItem;
