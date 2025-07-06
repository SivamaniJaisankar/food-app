import { useEffect, useState } from "react";
import { restaurantMenuList } from "../utlis/restaurantMenuList";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utlis/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  
  const resInfo = useRestaurantMenu(resId);

  return (
    <div>
      <div className="w-8/12 mx-auto my-10 p-5 shadow-md shadow-gray-600 rounded-xl">
        <p className="font-extrabold text-xl text-gray-500">{resInfo.name}<span className={`mx-2 px-3 py-1 rounded-md text-sm text-white ${resInfo.rating > 4 ? 'bg-green-400' : 'bg-red-400' }`}>{resInfo.rating}</span></p>   
        {resInfo.offers && <p className="my-2 font-semibold text-sm"><span className="font-light mr-4">Offer</span>{resInfo.offers}</p>}
        <p className="my-2 font-semibold text-sm"><span className="font-light mr-4">Outlet</span> {resInfo.location}</p>
        <p className="my-2 font-semibold text-sm"><span className="font-light mr-4">Delivery Time</span>{resInfo.delivery_time}</p>
      </div>
    </div>
  );
};

export default RestaurantMenu;
