import { Fragment, useEffect, useState } from "react";
import ProductCard from "../../components/product-card/product-card.component";

import { useParams } from "react-router-dom";
import { CategoryContainer, CategoryTitle } from "./category.styles";

//Redux Based Imports
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState(categoriesMap[category]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <CategoryTitle className="category-title">
        {category.toUpperCase()}
      </CategoryTitle>
      <CategoryContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryContainer>
    </Fragment>
  );
};

export default Category;
