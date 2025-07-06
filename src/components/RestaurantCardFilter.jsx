import { useState } from "react";

const RestaurantCardFilter = (props) => {
  const { resList, filteredResList, setFilteredResList } = props;
  const [searchInput, setSearchInput] = useState(""); 
  const [filterValue, setFilterValue] = useState("");
 
  const filters = [
    { id: 1, value: "Relevance (Default)", label: "Relevance (Default)" },
    { id: 2, value: "Delivery Time", label: "Delivery Time" },
    { id: 3, value: "Rating", label: "Top Rating" },
  ];
  const handleSearch = (e) => {
    const searchedValue = e.target.value;
    setSearchInput(searchedValue);
    const filteredList = resList.filter((res) =>
      res.name.toLowerCase().includes(searchedValue.toLowerCase())
    );
    setFilteredResList(filteredList);
  };

  const handleFilter = (e) => {
    const selectedValue = e.target.value;
    setFilterValue(selectedValue);

    if (selectedValue === "Relevance (Default)" && searchInput === "") {
      setFilteredResList(resList);
    } else if (selectedValue === "Relevance (Default)" && searchInput != "") {
      setFilteredResList(filteredResList);
    } else if (selectedValue === "Delivery Time") {
      const filteredList = [...filteredResList].sort(
        (a, b) => a.delivery_time.split("-")[0] - b.delivery_time.split("-")[0]
      );
      setFilteredResList(filteredList);
    } else if (selectedValue === "Rating") {
      const filteredList = [...filteredResList].sort(
        (a, b) => b.rating - a.rating
      );
      setFilteredResList(filteredList);
    }
  };

  return (
    <>
      <div className="m-5 flex justify-between w-11/12">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchInput}
          onChange={handleSearch}
          className="mx-2 p-1 w-3/12 rounded-sm outline-0 border border-gray-400 text-md text-gray-500 font-extrabold"
        />
        <div>
          <label className="ml-10 px-2 text-sm text-gray-500 font-extrabold">
            Sort By
          </label>
          <select
            className="mx-2 p-1 rounded-md outline-0 border border-gray-400 text-sm text-gray-500 font-extrabold cursor-pointer"
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
    </>
  );
};

export default RestaurantCardFilter;
