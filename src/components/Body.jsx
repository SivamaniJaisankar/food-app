import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRestaurantCard } from "../utlis/useRestaurantCard";
import RestaurantCardFilter from "./RestaurantCardFilter";
import RestaurantCard, { WithOfferLabel } from "./RestaurantCard";
import RestaurantCardShimmer from "./RestaurantCardShimmer";

const RestaurantCardWithLabel = WithOfferLabel(RestaurantCard);

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);

  const restaurantCardInfo = useRestaurantCard();

  useEffect(() => {
    if (restaurantCardInfo && restaurantCardInfo.length > 0) {
      setResList(restaurantCardInfo);
      setFilteredResList(restaurantCardInfo);
    }
  }, [restaurantCardInfo]);

  if (!restaurantCardInfo || restaurantCardInfo.length === 0) return <RestaurantCardShimmer />;

  return (
    <>
      <RestaurantCardFilter
        resList={resList}
        filteredResList={filteredResList}
        setFilteredResList={setFilteredResList}
      />

      {filteredResList.length === 0 ? (
        <div className="text-center text-gray-500 text-sm">No restaurants match your filter.</div>
      ) : (
        <div className="flex flex-col md:flex-row items-center w-11/12 md:w-12/12 mx-auto flex-wrap gap-4 p-5">
          {filteredResList?.map((res) => {
            const CardComponent = res.offers
              ? RestaurantCardWithLabel
              : RestaurantCard;
            return (
              <Link to={"/res/" + res.id} key={res.id}>
                <CardComponent res={res} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
