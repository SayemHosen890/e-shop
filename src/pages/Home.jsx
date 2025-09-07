import React, { useEffect } from "react";
import { Categories, mockData } from "../assets/mockData";
import heroImg from "../assets/Images/hero-page.png";
import Infosection from "../components/Infosection";
import CategorySec from "../components/CategorySec";
import { setproducts } from "../redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(setproducts(mockData));
  }, []);
  return (
    <>
      <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
          <div className="w-full md:w-3/12">
            <div className="bg-red-500 text-white text-xs font-bold py-2 px-2 uppercase">
              Shop By Categories
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border border-gray-200">
              {Categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-xs font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={heroImg} alt="" className="h-full w-full" />
            <div className="absolute top-16 left-8">
              <p className="text-gray-500 mb-3">Practice with me</p>
              <h2 className="text-3xl font-bold uppercase">
                Welcome to E-shop
              </h2>
              <p className="text-xl font-bold mt-2 text-gray-700 uppercase">
                Millions of Product
              </p>
              <button className="bg-red-500 text-white rounded-sm px-8 py-1.5 mt-4 hover:bg-red-600 transform transition:transform duration-300 hover:scale-105 uppercase">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <Infosection></Infosection>
        <CategorySec></CategorySec>
        <div className="container mx-auto py-12">
          <h2 className="text-2xl text-center font-bold mb-6">Top Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.products.slice(0, 5).map((product, index) => (
              <ProductCard product={product} key={index}></ProductCard>
            ))}
          </div>
        </div>
      </div>
      <Shop></Shop>
    </>
  );
};

export default Home;
