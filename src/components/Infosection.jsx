import React from "react";
import {
  FaHeadset,
  FaShippingFast,
  FaLock,
  FaTag,
} from "react-icons/fa";
import { FaMoneyBill1Wave } from 'react-icons/fa6'

const Infosection = () => {
  const infoItems = [
    {
      icon: <FaShippingFast className="text-3xl text-red-500" />,
      title: "Free Shipping",
      description: "Get Your Order Delivered With No Extra Cost",
    },
    {
      icon: <FaHeadset className="text-3xl text-red-500" />,
      title: "Support 24/7",
      description: "Get Your Order Delivered With No Extra Cost",
    },
    {
      icon: <FaMoneyBill1Wave className="text-3xl text-red-500" />,
      title: "100% Money Back",
      description: "Get Your Order Delivered With No Extra Cost",
    },
    {
      icon: <FaLock className="text-3xl text-red-500" />,
      title: "Payment Secure",
      description: "Get Your Order Delivered With No Extra Cost",
    },
    {
      icon: <FaTag className="text-3xl text-red-500" />,
      title: "Discount",
      description: "Get Your Order Delivered With No Extra Cost",
    },
  ];
  return (
    <div className="bg-white pb-8 pt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
        {infoItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4 border border-gray-100 rounded-lg shadow-md transform transition:transform duration-300 hover:scale-105 cursor-pointer">
            {item.icon}
            <h3 className="mt-4 font-semibold text-xl">{item.title}</h3>
            <p className="mt-2 text-gray-500">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infosection;
