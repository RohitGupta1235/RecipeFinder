import React from "react";
import "./App.css";
import NavBar from "./components/common/NavBar";
import Home from "./pages/Home";
import Recipies from "./pages/Recipies";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeDetails from "./components/RecipeDetails";
function App() {
  //jin bhi component mein routing dalnin using routes se wrap krna hoga
  //url ka jo tarikka hoga ho na use route mein likhna hoga
  //jo bbhi path dena chaungae localhost:3000/ k baad
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipies />} />
        <Route path="/recipes/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
