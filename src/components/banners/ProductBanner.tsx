import React from "react";
import PrimaryButton from "../buttons/PrimaryButton";

interface ProductBannerProps {
  image: string;
  title: string;
  originalPrice: number;
}

const ProductBanner: React.FC<ProductBannerProps> = ({
  image,
  title,
  originalPrice,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-4 my-2 w-full ">
      <img
        src={image}
        alt={title}
        className="w-full h-40 md:w-40 object-cover rounded-lg mr-4"
      />
      <div className="flex-grow items-center justify-center  max-w-full">
        <h2 className="text-base font-semibold">{title}</h2>

        <div className="flex items-center justify-center mt-1">
          <span className="text-xl justify-center text-center font-bold">
            ${originalPrice.toFixed(2)}
          </span>
        </div>

        <div className="flex flex-row gap-4">
          <PrimaryButton>Ver publicación</PrimaryButton>
          <PrimaryButton>Editar </PrimaryButton>
          <PrimaryButton>Eliminar</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
