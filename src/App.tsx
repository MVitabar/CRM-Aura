import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsContainer from "./pages/products/ProductsContainer";
import "./index.css";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="/products"
          element={<ProductsContainer children={undefined} />}
        ></Route>
        <Route
          path="/statistics"
          element={<ProductsContainer children={undefined} />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
