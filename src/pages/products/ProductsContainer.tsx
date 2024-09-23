import React, { useState } from "react";
import { ProductProvider } from "../../context/ProductContext";
import ProductForm from "../../components/forms/ProductForm";
import SideBar from "../../components/sidebar/Sidebar";
import ProductList from "../../components/lists/ProductList";
import Header from "../../components/header/Header";
import Statistics from "../../views/statistics/StatisticsContainer";
import EventManager from "../../views/eventManager/EventManagerContainer";
import ProductEdit from "../../components/forms/ProductEdit";

interface ProductContainerProps {
  children: React.ReactNode;
}

const ProductsContainer: React.FC<ProductContainerProps> = () => {
  const [currentView, setCurrentView] = useState<string>("products");
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const renderView = () => {
    switch (currentView) {
      case "products":
        return <ProductList />;
      case "statistics":
        return <Statistics />;
      case "events":
        return <EventManager />;
      case "edit-product":
        return <ProductEdit />;
      default:
        return <ProductForm />;
    }
  };

  return (
    <ProductProvider>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-screen">
        {/* Sidebar visible solo en pantallas medianas y grandes */}
        <SideBar
          onAddProduct={() => setCurrentView("addProduct")}
          setCurrentView={setCurrentView}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          className="hidden md:block md:w-64"
        />

        {/* Sidebar responsivo en pantallas pequeñas */}
        <SideBar
          onAddProduct={() => setCurrentView("addProduct")}
          setCurrentView={setCurrentView}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          className={`block md:hidden absolute z-40 h-full bg-white shadow-lg transform transition-transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        />

        <main
          className={`flex flex-col w-full   bg-gray-100 justify-center items-center overflow-y-auto transition-all duration-300 
           md:pl-64  
          `}
        >
          {renderView()}
        </main>
      </div>
    </ProductProvider>
  );
};

export default ProductsContainer;
