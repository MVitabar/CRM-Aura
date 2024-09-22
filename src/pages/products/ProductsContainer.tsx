import React, { useState } from "react";
import { ProductProvider } from "../../context/ProductContext";
import ProductForm from "../../components/forms/ProductForm";
import SideBar from "../../components/sidebar/Sidebar";
import ProductList from "../../components/lists/ProductList";
import Header from "../../components/header/Header";
import Statistics from "../../views/statistics/StatisticsContainer"; // Asegúrate de tener este componente
import EventManager from "../../views/eventManager/EventManagerContainer"; // Asegúrate de tener este componente

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
      default:
        return <ProductForm />;
    }
  };

  return (
    <ProductProvider>
      <Header toggleSidebar={toggleSidebar} />
      <div className="flex h-screen">
        <SideBar
          onAddProduct={() => setCurrentView("addProduct")}
          setCurrentView={setCurrentView}
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
        />
        <main className="flex flex-1  p-6 bg-gray-100 justify-center items-center w-full overflow-y-auto">
          {renderView()}
        </main>
      </div>
    </ProductProvider>
  );
};

export default ProductsContainer;
