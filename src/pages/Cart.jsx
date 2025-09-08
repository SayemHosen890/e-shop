import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../assets/Images/emptycart.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState("Main Street, 0012");
  const [isModalOpen,setIsModalOpen]=useState(false)
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="tetx-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-5 border-gray-400 font-bold text-md">
                <p>Products</p>
                <div className="flex space-x-8">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              {cart.products.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-between items-center p-3 border-b"
                >
                  <div className="md:flex items-center space-x-4">
                    <img
                      src={product.image}
                      alt=""
                      className="w-26 h-26 object-contain rounded"
                    />
                    <div className="flex-1 ml-4">
                      <h3 className="text-lg font-semibold">{product.name}</h3>
                    </div>
                  </div>
                  <div className="flex space-x-10 items-center">
                    <p>${product.price}</p>
                    <div className="flex justify-center items-center border">
                      <button className="text-xl font-bold border-r px-1.5">
                        -
                      </button>
                      <p className="text-xl px-2">{product.quantity}</p>
                      <button className="text-xl font-bold border-l px-1">
                        +
                      </button>
                    </div>
                    <p>${(product.quantity * product.price).toFixed(2)}</p>
                    <button className="text-red-400 hover:text-red-600">
                      <FaTrashAlt />
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border-gray-300">
              <h3 className="text-md font-semibold mb-5">Cart Total</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-md">Total Item: </span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className=" mb-5 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                Shipping to : {''}
                <span className="text-sm font-semibold">{address}</span>
                </p>
                <button className="text-blue-400 hover:underline mt-1 ml-2" onClick={()=>setIsModalOpen(true)}>Change Address</button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price</span>
                <span>{cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-400 hover:bg-red-600 text-white py-2 rounded-sm">Procced to Checkout</button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}></Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img src={EmptyCart} alt="" className="h-95" />
        </div>
      )}
    </div>
  );
};

export default Cart;
