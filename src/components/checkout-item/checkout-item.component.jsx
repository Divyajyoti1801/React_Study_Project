import {
  Arrow,
  CheckoutImageContainer,
  CheckoutItemContainer,
  Name,
  Price,
  Quantity,
  RemoveButton,
  Value,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </CheckoutImageContainer>
      <Name>{name}</Name>
      <Quantity>
        <Arrow>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow> &#10095;</Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
