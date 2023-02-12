import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import CardSkeleton from "./CardSkeleton";
import { useNavigate } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filterdRestaurants, setFilteredRestaurants] = useState([]);

  const handleFilter = (e) => {
    setSearchText(e.target.value);
  };

  const navigate = useNavigate();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=14.4425987&lng=79.98645599999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const showDetails = (id) => {
    navigate("restaurant/" + id);
  };

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline !!, Please check your internet connection.</h1>;
  }

  return (
    <>
      <div className="search-container p-5 bg-pink-50 my-5">
        <input
          type="text"
          className="bg-gray-200 focus:bg-green-50"
          value={searchText}
          onChange={handleFilter}
        />
        <button
          className="px-2 m-2 w-15 bg-purple-800 hover:bg-green-800 text-white rounded-lg"
          onClick={() => {
            const filterdRestaurants = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filterdRestaurants);
          }}
        >
          Search
        </button>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        <SkeletonTheme highlightColor="bg-pink-50">
          {filterdRestaurants.length ? (
            filterdRestaurants.map((card) => {
              return (
                <div
                  className="w-56 p-2 m-2 shadow-lg bg-pink-50"
                  key={card.data.id}
                  onClick={() => showDetails(card.data.id)}
                >
                  <RestaurantCard {...card.data} />
                </div>
              );
            })
          ) : (
            <CardSkeleton count={8} />
          )}
        </SkeletonTheme>
      </div>
    </>
  );
};
export default Body;
