import { Route, Routes } from "react-router-dom";
import Home from "./Router/home/home.router";
import Navigation from "./Router/navigation/navigation.router";
//This is where all routes are present this is like main function of project.

import Authentication from "./Router/authentication/authentication.router";
import Shop from "./Router/shop/shop.router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
  