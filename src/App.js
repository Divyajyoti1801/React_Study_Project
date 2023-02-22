import { Route, Routes } from "react-router-dom";
import Home from "./Router/home/home.router";
//This is where all routes are present this is like main function of project.


import Navigation from "./Router/navigation/navigation.router";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
