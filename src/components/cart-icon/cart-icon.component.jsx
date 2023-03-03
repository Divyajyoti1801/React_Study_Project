import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import { Cart, CartItemContainer, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <Cart />
      <ItemCount className="item-count">0</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;
