import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRestaurantMenu } from "../utlis/useRestaurantMenu";
import { FaRegStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import RestaurantMenuList from "./RestaurantMenuList";
import RestaurantMenuShimmer from "./RestaurantMenuShimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const { categories } = resInfo;

  const [showItem, setShowItem] = useState(0);

  if(!resInfo) return (<RestaurantMenuShimmer />)

  return (
    <div>
      <div className="w-11/12 md:w-8/12 mx-auto mt-10 p-8 shadow-md shadow-gray-800 rounded-md">
        <div className="flex">
          <p className="font-extrabold text-md md:text-xl text-gray-700 mr-5 mb-2">
            {resInfo.name}
          </p>
          <p
            className={`font-semibold text-sm md:text-md flex ${
              resInfo.rating > 4.0 ? "text-green-600" : "text-red-600"
            }`}
          >
            <FaRegStar
              className={`text-md md:text-xl mx-1 ${
                resInfo.rating > 4.0 ? "text-green-600" : "text-red-600"
              }`}
            />
            {resInfo.rating}
          </p>
        </div>
        {resInfo.offers && (
          <p className="my-2 flex text-sm md:text-md text-gray-500 font-extrabold">
            <BiSolidOffer className="mr-1 text-2xl text-amber-300" />
            {resInfo.offers}
          </p>
        )}
        <p className="my-2 flex text-sm md:text-md text-gray-500 font-extrabold">
          <CiDeliveryTruck className="mr-1 text-2xl text-amber-900" />
          {resInfo.delivery_time}
        </p>
      </div>
      <div className="w-11/12 md:w-8/12 mx-auto my-1 p-1 md:p-3 shadow-md shadow-gray-800 rounded-md">
        {categories?.map((c, index) => (
          <RestaurantMenuList 
            c={c} 
            key={index} 
            showItem={showItem === index ? true : false} 
            setShowItem={() => showItem === index ? setShowItem('') : setShowItem(index)}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
