import { useParams } from "react-router-dom";
import { IMG_URL } from "./constants";
import CardSkeleton from "./CardSkeleton";
import useRestaurant from "../utils/useRestaurant";

const Restaurantmenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);

  if (!restaurant) {
    return (
      <div>
        <CardSkeleton count={1} />
      </div>
    );
  }
  return (
    <div className="flex flex-wrap">
      <div>
        <h1 className="font-bold text-xl m-5">{restaurant.name}</h1>
        <img src={IMG_URL + restaurant.cloudinaryImageId} />
        <h3>{restaurant.area}</h3>
        <h3>{restaurant.city}</h3>
        <h3>{restaurant.avgRating}</h3>
        <h3>{restaurant.costForTwoMsg}</h3>
      </div>
      <div>
        <h1 className="font-bold text-xl m-5">Menu</h1>
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
