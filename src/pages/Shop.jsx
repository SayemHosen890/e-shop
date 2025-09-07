import React from 'react'
import { useSelector } from 'react-redux';
import ProductCard from '../components/ProductCard';

const Shop = () => {
    const products=useSelector(state=>state.product);
  return (
    <div className="container mx-auto py-12 md:px-16 lg:px-24">
        <h2 className="text-2xl text-center font-bold mb-6">Shops</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 gap-6 cursor-pointer">
          {products.products.map((product,index)=>(
            <ProductCard product={product} key={index}></ProductCard>
          ))}
        </div>
      </div>
  )
}

export default Shop