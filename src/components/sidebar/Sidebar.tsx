/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import productsIcon from "../../assets/icons/Shopping-bag.svg";
import statisticsIcon from "../../assets/icons/Brand-google-analytics.svg";
import inboxIcon from "../../assets/icons/File.svg";

interface SideBarProps {
  onAddProduct: () => void;
  setCurrentView: (view: string) => void; // Nueva prop para cambiar la vista
  isOpen: boolean; // New prop to track sidebar's visibility
  toggleSidebar: () => void; // New prop to toggle sidebar's visibility
  className: string; // New prop to add custom class names
}

const SideBar: React.FC<SideBarProps> = ({
  onAddProduct,
  setCurrentView,
  isOpen,
}) => {
  return (
    <aside
      className={`fixed left-0 top-[60px] w-[250px] h-[calc(100vh-60px)] bg-white shadow-lg overflow-y-auto z-10 ${
        isOpen ? "block" : "hidden md:block"
      }`}
    >
      <div className="flex flex-col p-4">
        <SecondaryButton
          className="mb-6 bg-white text-purple-600 border border-purple-600 hover:bg-purple-600 hover:text-white"
          onClick={onAddProduct}
        >
          Añadir Producto <span className="w-3 h-3 mr-2">+</span>
        </SecondaryButton>

        <nav>
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setCurrentView("products")} // Cambia la vista al hacer clic
                className="flex items-center py-2 px-4 bg-purple-100 rounded-md text-purple-600 w-full text-left"
              >
                <img
                  src={productsIcon}
                  alt="Productos"
                  className="w-6 h-6 mr-3 opacity-50"
                />
                <span>Tus productos</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("statistics")}
                className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md w-full text-left"
              >
                <img
                  src={statisticsIcon}
                  alt="Estadísticas"
                  className="w-6 h-6 mr-3 opacity-50"
                />
                <span>Analíticas</span>
              </button>
            </li>
            <li>
              <button
                onClick={() => setCurrentView("events")}
                className="flex items-center py-2 px-4 hover:bg-gray-100 rounded-md w-full text-left"
              >
                <img
                  src={inboxIcon}
                  alt="Gestor de Eventos"
                  className="w-6 h-6 mr-3 opacity-50"
                />
                <span>Gestor de Eventos</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default SideBar;
