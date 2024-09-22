import React from "react";
import { NavLink } from "react-router-dom";
import aura from "../../assets/Imagotipo 2.png";

const Home: React.FC = () => {
  return (
    <div className=" h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
      <img src={aura} alt="Module Aura logo" className="w-1/3 mb-8" />
      <NavLink
        to="/products"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-9 py-2 px-4 rounded"
      >
        INGRESAR
      </NavLink>
    </div>
  );
};

export default Home;
