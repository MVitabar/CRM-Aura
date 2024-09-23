import React, { createContext, useState, useEffect, ReactNode } from "react";
import { Product, ProductContextType } from "../context/ProductContextTypes";

export const ProductContext = createContext<ProductContextType | undefined>(
  undefined
);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  // Función para obtener los productos de la API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:3000/products"); // Ruta de tu db.json
      if (!response.ok) {
        throw new Error("Error al obtener productos");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Llamar a fetchProducts cuando el componente se monte
  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = (product: Product) => {
    setProducts((prevProducts) => [product, ...prevProducts]);
  };

  const getProductById = (id: string) => {
    const item = products.find((product) => product.id === id);
    return item ?? [];
  };

  const updateProduct = (id: string, product: Partial<Product>) => {
    setProducts((prevProducts) =>
      prevProducts.map((p) => (p.id === id ? { ...p, ...product } : p))
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        fetchProducts,
        getProductById,
        updateProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
