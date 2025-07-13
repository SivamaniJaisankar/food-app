import { FaRegStar } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { CiDeliveryTruck } from "react-icons/ci";
import RestaurantMenuListShimmer from "./RestaurantMenuListShimmer";


const RestaurantMenuShimmer = () => {
  
  
  return (
    <div>
      <div className="w-11/12 md:w-8/12 mx-auto mt-10 p-8 shadow-md shadow-gray-800 rounded-md">
        <div className="flex">
          <p className="font-extrabold text-xl shadow-md shadow-slate-200 mr-5 mb-2 w-6/12">
          </p>
          <p className="font-semibold text-md flex shadow-md shadow-slate-200 w-2/12">
            <FaRegStar className="text-xl mx-1"/>
          </p>
        </div>
          <p className="my-2 flex text-md shadow-md shadow-slate-200 font-extrabold w-8/12">
            <BiSolidOffer className="mr-1 text-2xl" />
          </p>
        <p className="my-2 flex text-md shadow-md shadow-slate-200 font-extrabold w-8/12">
          <CiDeliveryTruck className="mr-1 text-2xl" />
        </p>
      </div>
      <div className="w-11/12 md:w-8/12 mx-auto my-1 p-3 h-5 shadow-md shadow-gray-800 rounded-md">
        <RestaurantMenuListShimmer />
        <RestaurantMenuListShimmer />
        <RestaurantMenuListShimmer />
        <RestaurantMenuListShimmer />
        <RestaurantMenuListShimmer />
      </div>
    </div>
  );
};

export default RestaurantMenuShimmer;
