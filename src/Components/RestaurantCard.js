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
    <>
      <img src={IMG_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h6>{address}</h6>
      <h5>{costForTwoString}</h5>
    </>
  );
};

export default RestaurantCard;
