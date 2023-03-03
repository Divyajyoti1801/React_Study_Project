import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card.component";
import { ProductsContext } from "../../context/product.context";
import { ProductsContainer } from "./shop.styles";
const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <ProductsContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </ProductsContainer>
  );
};

export default Shop;
