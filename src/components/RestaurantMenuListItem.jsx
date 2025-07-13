import { useContext, useState } from "react";
import CartContext from "../utlis/CartContext";

const RestaurantMenuListItem = ({ item }) => {
  const { cartItem, addItem, removeItem } = useContext(CartContext);

  const cartEntry = cartItem.find((prev) => prev.dishName === item.dish_name);


  return (
    <div className="w-12/12 mx-auto mb-2 p-3 md:p-5 border border-slate-300">
      <div className="border-b border-b-gray-300 flex justify-between items-center p-5">
        <div className="">
          <p className="text-sm md:text-md font-semibold my-1">{item.dish_name}</p>
          <p className="text-sm md:text-md font-semibold my-1">₹{item.price}</p>
          <p className="text-xs md:text-sm mt-3">{item.description}</p>
        </div>
        <div className="w-3/12 md:w-2/12">
          {cartEntry ? (
            <div className="my-1 px-1 md:px-4 py-1 md:py-2 rounded-md outline-0 border border-gray-400 text-md text-green-500 font-extrabold flex justify-between">
              <button
                className="cursor-pointer hover:text-red-600"
                onClick={() => removeItem(item.dish_name)}
              >
                -
              </button>
              {cartEntry.count}
              <button
                className="cursor-pointer hover:text-red-600"
                onClick={() => addItem(item.dish_name, item.price)}
              >                
                +
              </button>
            </div>
          ) : (
            <button
              className="px-6 md:px-14 py-1 md:py-2 rounded-md outline-0 border border-gray-400 text-sm text-green-500 font-extrabold cursor-pointer"
              onClick={() => addItem(item.dish_name, item.price)}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenuListItem;
