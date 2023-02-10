import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_URL } from "./constants";
import CardSkeleton from "./CardSkeleton";

const Restaurantmenu = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=14.4425987&lng=79.98645599999999&menuId=${id}`
    );
    const json = await data.json();
    console.log(json);
    setRestaurant(json.data);
  };

  if (!restaurant) {
    return (
      <div>
        <CardSkeleton count={1} />
      </div>
    );
  }
  return (
    <div className="menu">
      <div>
        <h1>{restaurant.name}</h1>
        <img src={IMG_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Restaurantmenu;
