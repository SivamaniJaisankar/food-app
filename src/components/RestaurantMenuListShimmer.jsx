import { FaChevronCircleDown } from "react-icons/fa";
import RestaurantMenuListItem from "./RestaurantMenuListItem";

const RestaurantMenuListShimmer = () => {
  
  return (
    <div>
      <div
        className="flex justify-between p-4 m-2 text-md shadow-md shadow-slate-100 rounded-md"
      >
        <p className="w-11/12"></p>
        <FaChevronCircleDown className="text-2xl text-orange-300 shadow-sm shadow-slate-200 w-1/12" />
      </div>

    </div>
  );
};

export default RestaurantMenuListShimmer;
