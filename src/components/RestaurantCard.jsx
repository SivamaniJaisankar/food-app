import { restaurantList } from "../utlis/restaurantList";
import { useEffect, useState } from "react";

const RestaurantCard = () => {
  const [searchInput, setSearchInput] = useState("");
  const [resList, setResList] = useState([]);
  const [filteredResList, setFilteredResList] = useState([]);
  const [filterValue, setFilterValue] = useState("");

  const filters = [
    { id: 1, value: "Relevance (Default)", label: "Relevance (Default)" },
    { id: 2, value: "Delivery Time", label: "Delivery Time" },
    { id: 3, value: "Rating", label: "Rating" },
  ];

  const handleSearch = (e) => {
    const searchedValue = e.target.value;
    setSearchInput(searchedValue);
    const filteredList = resList.filter((res) => res.name.toLowerCase().includes(searchedValue.toLowerCase()));
    console.log(filteredList);
    setFilteredResList(filteredList);
  };

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setFilterValue(selectedValue);

    if (selectedValue === "Relevance (Default)" && searchInput === '') {
      setFilteredResList(restaurantList);
    } else if (selectedValue === "Relevance (Default)" && searchInput != '') {
      setFilteredResList(filteredResList);
    } else if (selectedValue === "Delivery Time") {
      const filteredList = [...filteredResList].sort((a, b) => a.delivery_time.split("-")[0] - b.delivery_time.split("-")[0]);
      setFilteredResList(filteredList);
    } else if (selectedValue === "Rating") {
      const filteredList = [...filteredResList].sort((a, b) => b.rating - a.rating);
      setFilteredResList(filteredList);
    }
  };


  useEffect(() => {
    setResList(restaurantList);
    setFilteredResList(restaurantList);
  }, []);

  return (
    <>
      <div className="m-5 flex justify-between w-11/12">
        <input
            type="text"
            placeholder="Search for restaurants"
            value={searchInput}
            onChange={handleSearch}
            className="mx-2 p-1 w-3/12 rounded-sm outline-0 border border-gray-400 font-semibold text-gray-600 font-mono"
          />
          <div>
          <label className="ml-10 px-2 font-semibold text-gray-500 text-md font-mono">
            Sort By
          </label>
          <select
            className="mx-2 p-1 rounded-md outline-0 border border-gray-400 font-semibold text-gray-500 font-mono cursor-pointer"
            value={filterValue}
            onChange={handleFilter}
          >
            {filters.map((val) => (
              <option key={val.id} value={val.value}>
                {val.label}
              </option>
            ))}
          </select>
          </div>
      </div>
      <div className="flex flex-wrap gap-4 p-5">
        {filteredResList.map((res) => (
          <div
            key={res.id}
            className="bg-gray-100 shadow-gray-500 shadow-sm rounded-md w-60 h-80 p-2 flex flex-col items-center justify-between cursor-pointer"
          >
            <img
              src={res.image}
              alt="Restaurant Image"
              className="h-32 w-52 rounded-md shadow shadow-amber-200"
            />
            <p className="font-extrabold h-10 w-full text-md text-center">
              {res.name}
            </p>
            <div className="flex items-center justify-center h-5 w-full my-1">
              <p className={`mx-4 font-sans text-sm text-white font-semibold px-3 py-1 rounded-md ${res.rating > 4.0 ? 'bg-green-400' : 'bg-red-400'}`} >
                {res.rating}
              </p>

              <p className="mx-4 font-sans text-sm bg-amber-300 text-white font-semibold px-2 py-1 rounded-md">
                {res.delivery_time}
              </p>
            </div>
            <p className="w-full font-semibold text-sm text-center">
              {res.cuisine.slice(0, 2).join(", ")}
            </p>
            <p className="p-1 w-full text-center text-md font-semibold">
              {res.location}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantCard;
