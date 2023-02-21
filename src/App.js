import { Route, Routes } from "react-router-dom";
import Home from "./Router/home/home.router";
//This is where all routes are present this is like main function of project.
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default App;
