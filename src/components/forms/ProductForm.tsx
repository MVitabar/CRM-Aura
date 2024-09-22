import React, { useState, ChangeEvent } from "react";
import {
  PhotoIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import PrimaryButton from "../buttons/PrimaryButton";
import { useProductContext } from "../../hooks/useProductContext";
import { v4 as uuidv4 } from "uuid"; // Necesitarás instalar uuid: npm install uuid @types/uuid

function ProductForm() {
  const { addProduct } = useProductContext();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    state: "",
    category: "",
    freeShipping: "",
  });
  const [images, setImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showFullDescription, setShowFullDescription] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]:
        name === "price" || name === "discount"
          ? parseFloat(value) || 0
          : value,
    });
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newImages = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newProduct = {
      id: uuidv4(),
      ...product,
      images: images,
      price: product.price.toString(),
    };
    addProduct(newProduct);
    // Resetear el formulario
    setProduct({
      title: "",
      description: "",
      price: 0,
      state: "",
      category: "",
      freeShipping: "",
    });
    setImages([]);
    setCurrentImageIndex(0);
  };

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <>
      <div className="w-full bg-white p-4 rounded-lg shadow-md h-auto mt-16 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Añadir Producto</h2>
        <div className="flex flex-col md:flex-row">
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-6/12 max-h-[600px] overflow-hidden mb-6 md:mb-0">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="title"
                  className="block text-sm font-medium text-gray-700"
                >
                  Título
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={product.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700"
                >
                  Descripción
                </label>
                <textarea
                  name="description"
                  id="description"
                  rows={3}
                  value={product.description}
                  onChange={handleChange}
                  className="mt-1 block w-full pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Precio
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    value={product.price}
                    onChange={handleChange}
                    required
                    min="0"
                    step="0.01"
                    className="mt-1 block w-full pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Estado
                  </label>
                  <input
                    type="text"
                    name="state"
                    id="state"
                    value={product.state}
                    onChange={handleChange}
                    className="mt-1 block w-full pl-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Categoría
                  </label>
                  <select
                    name="category"
                    id="category"
                    value={product.category}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="Ropa">Ropa</option>
                    {/* Agregar más opciones de categoría */}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="freeShipping"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Envío gratis
                  </label>
                  <select
                    name="freeShipping"
                    id="freeShipping"
                    value={product.freeShipping}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  >
                    <option value="">Seleccionar</option>
                    <option value="Si">Sí</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
              <button
                type="button"
                className="w-full py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Ver detalles avanzados
              </button>
              <div className="flex justify-end">
                <PrimaryButton
                  type="submit"
                  className="py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none"
                >
                  Guardar cambios
                </PrimaryButton>
              </div>
            </form>
          </div>

          {/* Vista Previa */}

          <div className="bg-white rounded-lg shadow-md w-full md:w-6/12 max-h-[600px] overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <div className="flex  h-full bg-gray-200 text-black items-center justify-center rounded-lg overflow-hidden shadow-lg">
                <div className="flex flex-col w-full md:w-60 lg:w-60 items-center justify-center">
                  <label
                    htmlFor="image-upload"
                    className="cursor-pointer items-center justify-center"
                  >
                    {images.length > 0 ? (
                      <img
                        src={images[currentImageIndex]}
                        alt={product.title}
                        className="flex flex-col w-full h-full object-cover mt-3"
                      />
                    ) : (
                      <div className="  w-48 h-48 flex items-center pt-2 justify-center bg-white rounded-lg border-2 border-dashed border-gray-300">
                        <PhotoIcon className="w-12 h-12 text-gray-600 bg-gray-300 rounded-full p-2" />
                        <p className="mt-2 text-sm text-gray-500 text-center">
                          Agregar fotos
                          <br />o arrástralas y suéltalas
                        </p>
                      </div>
                    )}
                  </label>
                  {images.length > 0 && (
                    <div className="flex justify-between z-10 relative -top-36 transform -translate-y-1/2 ">
                      <div className="flex items-center ">
                        <button
                          className="flex w-8 h-8 rounded-full items-center justify-center bg-black bg-opacity-30 text-white"
                          onClick={prevImage}
                        >
                          <ChevronLeftIcon className="w-6 h-6" />
                        </button>
                      </div>
                      <div>
                        <button
                          className="flex w-8 h-8 rounded-full items-center justify-center bg-black bg-opacity-30 text-white"
                          onClick={nextImage}
                        >
                          <ChevronRightIcon className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  )}
                  <input
                    id="image-upload"
                    type="file"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                    multiple
                  />
                </div>
              </div>
              <div className=" text-center mt-4 sm:">
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2">
                    {product.title || "Título del producto"}
                  </h3>
                  <div>
                    <p className="text-xl text-black font-bold  ">
                      $ {product.price || "Precio"}
                    </p>
                  </div>

                  <p className="text-sm mb-2"></p>
                  <div className="text-xs text-gray-800">
                    {showFullDescription ? (
                      <>
                        <p className="break-words">
                          {product.description || "Descripción del producto"}
                        </p>
                        <button
                          onClick={toggleDescription}
                          className="text-blue-600 hover:underline mt-1"
                        >
                          Ver menos
                        </button>
                      </>
                    ) : (
                      <>
                        <p className="line-clamp-2 break-words">
                          {product.description || "Descripción del producto"}
                        </p>
                        <button
                          onClick={toggleDescription}
                          className="text-blue-600 hover:underline mt-1"
                        >
                          ...ver más
                        </button>
                      </>
                    )}
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    {product.freeShipping === "Si" && (
                      <span className="text-xs bg-green-500 text-white px-2 py-1 rounded">
                        Envío Gratis
                      </span>
                    )}
                    <span className="text-xs">
                      Categoría: {product.category || "No seleccionada"}
                    </span>
                  </div>
                  <div>
                    <span>{product.state}</span>
                  </div>
                </div>
              </div>
              <button className="w-full mt-4 py-2 px-4 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                Ver vista previa
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductForm;
