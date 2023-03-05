import { useContext } from "react";

import { CartContext } from "../../context/cart.context";
import { Cart, CartItemContainer, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <Cart />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;
