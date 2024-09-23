import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import ProductsContainer from "./pages/products/ProductsContainer";
import ProductEdit from "./components/forms/ProductEdit";
import "./index.css";
import { ProductProvider } from "./context/ProductContext";
function App() {
  return (
    <ProductProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/products"
            element={<ProductsContainer children={undefined} />}
          ></Route>
          <Route path="/edit-product" element={<ProductEdit />} />
          <Route
            path="/statistics"
            element={<ProductsContainer children={undefined} />}
          ></Route>
          <Route
            path="/events"
            element={<ProductsContainer children={undefined} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ProductProvider>
  );
}

export default App;
