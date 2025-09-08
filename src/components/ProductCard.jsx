import React from "react";
import { FaStar } from "react-icons/fa";
import {addToCart} from "../redux/cartslice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const handleAddToCart = (e, product) => {
    e.stopPropagation()
    e.preventDefault()
    dispatch(addToCart(product));
    alert("Product Added Smoothly");
  };
  return (
    <div className="bg-white p-4 border-gray-300 rounded shadow-md relative transform transition:transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-500">{product.price}</p>
      <div className="flex items-center mt-2">
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-yellow-500"></FaStar>
        <FaStar className="text-gray-300"></FaStar>
      </div>
      <div
        className="absolute bottom-4 right-2 flex justify-center items-center w-8 h-8 bg-red-400 group text-white text-md rounded-full hover:w-32 hover:bg-red-500 transition-all duration-100"
        onClick={(e) => handleAddToCart(e, product)}
      >
        <span className="group-hover:hidden">+</span>
        <span className="hidden group-hover:block">Add To Cart</span>
      </div>
    </div>
  );
};

export default ProductCard;
