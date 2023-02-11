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
      <div className="search-container">
        <input type="text" value={searchText} onChange={handleFilter} />
        <button
          onClick={() => {
            const filterdRestaurants = filterData(searchText, allRestaurants);
            setFilteredRestaurants(filterdRestaurants);
          }}
        >
          Filter
        </button>
      </div>
      <div className="cards-container">
        <SkeletonTheme highlightColor="#d3d0d0">
          {filterdRestaurants.length ? (
            filterdRestaurants.map((card) => {
              return (
                <div
                  className="card"
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
