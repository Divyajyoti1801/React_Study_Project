import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import {
  Name,
  Price,
  ProductCardContainer,
  ProductFooter,
} from "./product-card.styles";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ProductFooter>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </ProductFooter>
      <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Add to card</Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
