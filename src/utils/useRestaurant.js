import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Components/constants";

const useRestaurant = (id) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  const getRestaurantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + id);
    const json = await data.json();
    setRestaurant(json.data);
  };

  return restaurant;
};

export default useRestaurant;
