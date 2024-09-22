import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

interface ProductBannerProps {
  image: string;
  title: string;
  originalPrice: number;
  currentPrice: number;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  image,
  title,
  originalPrice,
  currentPrice,
}) => {
  return (
    <div className="flex items-center bg-white shadow-md rounded-lg p-4 my-2 w-auto max-w-full">
      <img
        src={image}
        alt={title}
        className="w-24 h-24 object-cover rounded-lg mr-4"
      />
      <div className="flex-grow">
        <h2 className="text-base font-semibold">{title}</h2>

        <div className="flex items-center mt-1">
          <span className="text-gray-500 line-through mr-2">
            ${originalPrice.toFixed(2)}
          </span>
          <span className="text-xl font-bold">${currentPrice.toFixed(2)}</span>
        </div>

        <div className="flex flex-row gap-2 max-w-lg">
          <PrimaryButton>Ver publicación</PrimaryButton>
          <PrimaryButton>Editar </PrimaryButton>
          <PrimaryButton>Eliminar</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
