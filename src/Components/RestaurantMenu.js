import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

import { IMG_URL } from "./constants";
import CardSkeleton from "./CardSkeleton";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";

const Restaurantmenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

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
      <div></div>
      <div>
        <h1 className="font-bold text-xl m-5">Menu</h1>
        <ul className="px-5" data-testid="menu">
          {Object.values(restaurant?.menu?.items).map((item) => (
            <li key={item.id}>
              {item.name}
              <button
                data-testid="addBtn"
                className="p-1 bg-green-50"
                onClick={() => addFoodItem(item)}
              >
                Add
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default Restaurantmenu;
