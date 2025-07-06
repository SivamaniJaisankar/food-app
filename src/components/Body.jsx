import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRestaurantCard } from "../utlis/useRestaurantCard";
import RestaurantCardFilter from "./RestaurantCardFilter";
import RestaurantCard, { WithOfferLabel } from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const restaurantCardInfo = useRestaurantCard();

  const RestaurantCardWithLabel = WithOfferLabel(RestaurantCard)

  useEffect(() => {
    if (restaurantCardInfo && restaurantCardInfo.length > 0) {
      setResList(restaurantCardInfo);
      setFilteredResList(restaurantCardInfo);
    }
  }, [restaurantCardInfo]);

  if (!restaurantCardInfo || restaurantCardInfo.length === 0)
    return <RestaurantCardShimmer />;

  console.log(filteredResList);
  

  return (
    <>
      <RestaurantCardFilter
        resList={resList}
        filteredResList={filteredResList}
        setFilteredResList={setFilteredResList}
      />

      <div className="flex flex-wrap gap-4 p-5">
        {filteredResList?.map((res) => (  
          <Link to={"/res/" + res.id} key={res.id}>{res.offers ? (<RestaurantCardWithLabel res={res}/>): (<RestaurantCard res={res} />)  }</Link>
        ))}
      </div>
    </>
  );
};

export default Body;
