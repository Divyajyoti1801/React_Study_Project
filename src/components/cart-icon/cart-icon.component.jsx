import { useDispatch, useSelector } from "react-redux";
import { setIsCartOpen } from "../../store/cart/cart.action";
import {
  selectCartCount,
  selectIsCartOpen,
} from "../../store/cart/cart.selector";
import { Cart, CartItemContainer, ItemCount } from "./cart-icon.styles";
const CartIcon = () => {
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);
  const dispatch = useDispatch();

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(isCartOpen));

  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <Cart />
      <ItemCount className="item-count">{cartCount}</ItemCount>
    </CartItemContainer>
  );
};

export default CartIcon;
