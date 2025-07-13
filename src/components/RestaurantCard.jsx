import { FaRegStar } from "react-icons/fa";
import { CiDeliveryTruck } from "react-icons/ci";

const RestaurantCard = ({ res }) => {
  return (
      <div className="border border-black shadow-gray-600 shadow-sm rounded-md w-64 md:w-60 min-h-64 p-2 flex flex-col cursor-pointer">
        <img
          src={res.image}
          alt={`${res.name} - Restaurant`}
          className="h-32 w-full rounded-md shadow shadow-amber-200"
        />
        <p className="font-extrabold w-full text-md text-gray-600 my-1 h-7 truncate">
          {res.name}
        </p>
        <p className="w-full font-light text-sm mt-5 text-gray-700">
          {res?.cuisine?.slice(0, 3).join(", ")}
        </p>
        <div className="flex items-center w-full my-2">
          <FaRegStar className={`text-lg mx-1 ${res.rating > 4.0 ? "text-green-300" : "text-red-400"}`}/>
          <p className={`font-semibold text-sm ${res.rating > 4.0 ? "text-green-600" : "text-red-600"}`}>{res.rating || "N/A"}</p>
          <span className="mx-6">.</span>
          <CiDeliveryTruck  className="text-lg mx-1 text-amber-900"/>
          <p className="font-semibold text-sm text-amber-500">{res.delivery_time || "N/A"}</p>
        </div>
        
      </div>
    
  );
};

export default RestaurantCard;


export const WithOfferLabel = (RestaurantCard) => {
  return ({res}) => {
    return (
      <div className="relative">
      <h2 className="absolute top-2 left-2 bg-gray-600 text-white p-2 text-sm font-mono rounded-md">{res.offers}</h2>
      <RestaurantCard res={res}/>
      </div>
    )
  }
}