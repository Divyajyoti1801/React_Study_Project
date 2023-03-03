import {
  CartDropdownButton,
  CartDropdownContainer,
  CartItems,
} from "./cart-dropdown.styles";
const CartDropdown = () => {
  return (
    <CartDropdownContainer>
      <CartItems>
        <CartDropdownButton>GO TO CHECKOUT</CartDropdownButton>
      </CartItems>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
