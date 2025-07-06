import { useState, useEffect } from "react"

export const useRestaurantMenu = (resId) => {
    
    const [restaurantMenu, setRestaurantMenu] = useState([]);

    const fetchMenuInfo = async (resId) => {
    const response = await fetch("/data/restaurantMenuList.json");
    const data = await response.json();
    const res = data.find((res) => res.id === resId)
    setRestaurantMenu(res);
  };

  useEffect(() => {
    fetchMenuInfo(resId);
  }, []);

    return restaurantMenu;
}