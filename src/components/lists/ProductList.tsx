import React from "react";
import ProductBanner from "../banners/ProductBanner";
import SearchBar from "../inputs/SearchBar";
import { useProductContext } from "../../hooks/useProductContext";
import capaProductosVacio from "../../assets/Capa-productos-vacio.png";

const ProductList: React.FC = () => {
  const { products } = useProductContext();

  const calculateDiscountedPrice = (price: number, discount: number) => {
    return price * (1 - discount / 100);
  };

  return (
    <div className="container mx-auto py-4 flex flex-col items-center justify-center  w-full  overflow-y-auto">
      <div className="flex flex-col justify-between items-center mb-4 w-full">
        <SearchBar />
      </div>
      <div className="flex w-full justify-center items-center">
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
              currentPrice={calculateDiscountedPrice(
                Number(product.price),
                Number(product.discount)
              )}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default ProductList;
