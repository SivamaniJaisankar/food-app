import { useContext, useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import CartContext from "../utlis/CartContext";

const Cart = () => {
  
  const navigate = useNavigate();
  const { cartItem, setCartItem, addItem, removeItem } = useContext(CartContext);

  const [deliveryFee, setDeliveryFee] = useState(0);
 
  const handlePop = () => {

    if(window.confirm("Confirm your order ?")) {
    alert('Ordered Successfully');
    setCartItem([])
    navigate('/')
    }
  }

  

  if (cartItem.length === 0)
    return (
      <div className="border border-gray-300 shadow-md shadow-gray-400 rounded-md w-9/12 md:w-6/12 mx-auto my-10 p-5">
        <img 
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" 
          className="mx-auto w-11/12 md:w-6/12 h-44 md:h-52"
        />
        <h2 className="font-extrabold text-gray-500 text-md md:text-xl my-5 text-center">
          Your Cart is Empty
        </h2>
        <p className="font-extralight text-sm md:text-md text-center">You can go to home page to view more restaurants</p>
      </div>
    );

  return (
    <div className="border border-gray-300 shadow-md shadow-gray-400 rounded-md w-11/12 md:w-10/12 mx-auto my-5 md:my-10 h-7/12 md:h-12/12 flex flex-col md:flex-row">
      <div className="w-12/12 md:w-6/12 mx-auto my-2">
        {/*<h2 className="border border-black w-12/12 mx-auto p-3">
          {}
        </h2>*/}
        <div className="my-2 md:my-5">
          <ul className="border border-gray-300 shadow-md shadow-gray-500 bg-slate-50 w-11/12 p-2 md:p-3 mx-auto">
          {cartItem.map((item, index) => (
            
            <div key={index} className="">
            {item.count != '0' &&  (<ul className="w-12/12 text-sm border-b border-gray-300 flex justify-between items-center font-extralight">
            <li className="w-6/12 my-1">{item.dishName}</li>
            <li className="w-3/12 my-1 px-2 md:px-4 py-1 md:py-2 rounded-md outline-0 border border-gray-400 text-md text-green-500 font-extrabold flex justify-around">
              <button 
                className="cursor-pointer"
                onClick={()=>removeItem(item.dishName, item.price)}
              > - </button>
              {item.count}
              <button 
                className="cursor-pointer"
                onClick={()=>addItem(item.dishName, item.price)}
              > + </button>
            </li>
            <li className="w-2/12 my-1">₹{item.price}</li>
            </ul>
            )}
            </div>
            
          ))}
          </ul>
        </div>
      </div>
      <div className="border border-gray-300 rounded-md w-11/12 md:w-4/12 mx-auto my-2">
        <h5 className="border border-gray-50 shadow-sm shadow-gray-200 bg-slate-50 w-12/12 mx-auto p-2 md:p-3 my-2 md:my-5 font-extrabold">
          Bill Details
        </h5>
        <div className="text-sm w-12/12 border-b border-gray-300 flex justify-between items-center font-extralight p-1 md:p-3">
          <p>Bill Total</p>
          <p className="text-right">₹{cartItem.reduce((sum, item) => sum + Number(item.price), 0)}</p>
        </div>
        <div className="text-sm w-12/12 border-b border-gray-300 flex justify-between items-center font-extralight p-1 md:p-3">
          <p>Delivery Fee</p>
          <p><input className="py-2 w-6/12 float-right text-right border-b border-gray-300 outline-none" type="number" value={deliveryFee} onChange={(e)=> setDeliveryFee(Number(e.target.value))}/></p>
        </div>
        <div className="text-sm w-12/12 border-b border-gray-300 flex justify-between items-center font-extralight p-1 md:p-3">
          <p>To Pay</p>
          <p className="text-right">₹{cartItem.reduce((sum, item) => sum + Number(item.price), 0) + Number(deliveryFee)}</p>
        </div>
        <div className="my-2 md:my-5 flex justify-center">
          <button 
            onClick={() => handlePop()}
            className="w-6/12 mx-2 rounded-md outline-0 border border-gray-400 font-semibold bg-orange-400 text-white font-mono cursor-pointer p-2 md:p-3 hover:bg-orange-500 transition-colors duration-200
">
            PLACE ORDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
