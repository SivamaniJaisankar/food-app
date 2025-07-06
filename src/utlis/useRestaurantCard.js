import { useEffect, useState } from "react";

export const useRestaurantCard = () => {

    const [restaurantData, setRestaurantData] = useState([]);
    
    const fetchRestaurantInfo = async () => {
        const response = await fetch('/data/restaurantList.json');
        const data = await response.json();
        setRestaurantData(data)
      }
    
      useEffect(() => {
         fetchRestaurantInfo()  
      }, []);
    
    return restaurantData;
}