import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Authentication from "./Router/authentication/authentication.router";
import Checkout from "./Router/checkout/checkout.router";
import Home from "./Router/home/home.router";
import Navigation from "./Router/navigation/navigation.router";
import Shop from "./Router/shop/shop.router";

//Redux based imports
import { useDispatch } from "react-redux";

//Selector import

import { setCurrentUser } from "../src/store/user/user.action";

//User Authentication based imports
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
