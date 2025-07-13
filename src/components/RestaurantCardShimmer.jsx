const RestaurantCardShimmer = () => {


  return (
    <div className="flex flex-col md:flex-row items-center w-11/12 md:w-12/12 mx-auto flex-wrap gap-4 p-5">
    {Array.from({ length: 15}).map((_, index) => (
      <div key={index} className=" bg-gray-100 shadow-gray-300 shadow-sm rounded-md w-60 h-64 p-2 flex flex-col items-center justify-between cursor-pointer">
        <img
          className="h-28 w-52 rounded-md shadow-sm shadow-gray-100"
        />
        <p className="h-6 w-full rounded-md shadow-md shadow-gray-200"></p>
        <div className="flex items-center justify-center h-7 w-full my-1 p-2 rounded-md shadow-md shadow-gray-200">
          <p className="mx-2 my-1 w-4/12 h-6 rounded-md shadow-sm shadow-gray-100"></p>
          <p className="mx-2 my-1 w-4/12 h-6 rounded-md shadow-sm shadow-gray-100"></p>
        </div>
        <p className="w-full h-6 rounded-md shadow-md shadow-gray-200"></p>
      </div>
    ))}
    </div>
  );
};

export default RestaurantCardShimmer;
