import { FaChevronCircleDown } from "react-icons/fa";
import RestaurantMenuListItem from "./RestaurantMenuListItem";

const RestaurantMenuList = ({ c, showItem, setShowItem }) => {
  
  return (
    <div>
      <div
        onClick={setShowItem}
        className="flex justify-between p-2 md:p-4 m-2 cursor-pointer text-md text-gray-600 font-bold shadow-sm shadow-gray-200 bg-gray-100 border border-slate-400 rounded-md"
      >
        <p className="w-11/12 text-sm md:text-md">{c.title} ({c.items.length})</p>
        <FaChevronCircleDown className={`text-lg md:text-2xl text-orange-300 w-1/12 ${showItem ? "rotate-180" : ""}`} />
      </div>

      {showItem && c.items?.map((i, index) => (
          <RestaurantMenuListItem key={index} item={i} />
        ))}
    </div>
  );
};

export default RestaurantMenuList;
