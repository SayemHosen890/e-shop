import React from "react";
import manCategory from "../assets/Images/man.png";
import womenCategory from "../assets/Images/woman.png";
import kidCategory from "../assets/Images/kid.png";

const CategorySec = () => {
  const categories = [
    {
      title: "Men",
      imageUrl: manCategory
    },
    {
      title: "Women",
      imageUrl: womenCategory
    },
    {
      title: "Kids",
      imageUrl: kidCategory
    },
  ];

  return(
    <div className="container grid grid-cols-1 mx-auto sm:grid-cols-3 gap-6 cursor-pointer">
        {categories.map((category,index)=>(
            <div key={index} className="relative h-64 transform transition:transform duration-300 hover:scale-105">
                <img src={category.imageUrl} alt="" className="h-full w-full object-cover rounded-lg shadow-md"/>
                <div className="absolute top-20 left-12">
                    <p className="text-xl font-bold">{category.title}</p>
                    <p className="text-gray-500">View All</p>
                </div>
            </div>
        ))}
    </div>
  );
};

export default CategorySec;
