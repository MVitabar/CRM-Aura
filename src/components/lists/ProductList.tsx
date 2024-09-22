import React from "react";
import ProductBanner from "../banners/ProductBanner";
import { useProductContext } from "../../hooks/useProductContext";
import capaProductosVacio from "../../assets/Capa-productos-vacio.png";
import SearchBar from "../inputs/SearchBar";

const ProductList: React.FC = () => {
  const { products } = useProductContext();

  return (
    <div className=" mx-auto pt-2 flex flex-col  items-center mt-20 h-screen w-full  overflow-y-scroll">
      <div className="flex flex-col justify-between items-center w-full">
        <SearchBar />
      </div>
      <div className="flex flex-col w-11/12  justify-center items-center">
        {products.length === 0 ? (
          <div>
            <img
              className="min-w-80 justify-center items-center"
              src={capaProductosVacio}
              alt="No hay productos"
            />
            <h2 className="text-2xl font-bold text-center mt-4">
              No hay productos
            </h2>
          </div>
        ) : (
          products.map((product) => (
            <ProductBanner
              key={product.id}
              image={product.images[0] || ""}
              title={product.title}
              originalPrice={Number(product.price)}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
