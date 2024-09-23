import React from "react";
import { Link } from "react-router-dom"; // Asegúrate de importar Link
import PrimaryButton from "../buttons/PrimaryButton";

interface ProductBannerProps {
  image: string;
  title: string;
  originalPrice: number | string;
  id: string; // Agrega el ID del producto
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  image,
  title,
  originalPrice,
  id,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 my-2 w-full">
      <img
        src={image}
        alt={title}
        className="w-full h-40 md:w-40 object-cover rounded-lg mr-4"
      />
      <div className="flex-grow items-center justify-center max-w-full">
        <h2 className="text-base font-semibold">{title}</h2>

        <div className="flex items-center justify-center mt-1">
          <span className="text-xl justify-center text-center font-bold">
            ${originalPrice}
          </span>
        </div>

        <div className="flex flex-row gap-4">
          <PrimaryButton>Ver publicación</PrimaryButton>
          <Link to={`/edit-product/${id}`}>
            <PrimaryButton>Editar</PrimaryButton>
          </Link>
          <PrimaryButton>Eliminar</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
