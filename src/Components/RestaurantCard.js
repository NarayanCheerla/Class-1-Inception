import { IMG_URL } from "./constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  address,
}) => {
  console.log("Restaurant Card rendered.");
  return (
    <div className="card">
      <img src={IMG_URL + cloudinaryImageId} />
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <p>{address}</p>
      <h5>{costForTwoString}</h5>
    </div>
  );
};

export default RestaurantCard;
