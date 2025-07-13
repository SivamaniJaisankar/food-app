import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);

    const addItem = (dishName, price) => {
        const dishExists = cartItem.findIndex((prev) => prev.dishName === dishName);

        if(dishExists !== -1){
            const updatedCart = cartItem.map((item)=>(
                item.dishName === dishName ? {...item, count: item.count + 1, price: item.unitPrice * (item.count + 1)} : item
            ))
            setCartItem(updatedCart)
        } else {
            const newItem = {dishName: dishName, count : 1, price: price, unitPrice: price}
            setCartItem([...cartItem, newItem])
        }
    }

    const removeItem = (dishName, price) => {
        const dishExists = cartItem.findIndex((prev) => prev.dishName === dishName);

        if(dishExists !== -1){
            const updatedCart = cartItem
                .map((item)=>(item.dishName === dishName ? {...item, count: item.count - 1, price: item.unitPrice * (item.count - 1)} : item))
                .filter((item) => item.count !== 0)
            setCartItem(updatedCart)
        }    
    }

    return(
        <CartContext.Provider value={{ cartItem, setCartItem, addItem, removeItem }}>
            {children}
        </CartContext.Provider>
    )

}

export default CartContext;