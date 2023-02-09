const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  costForTwoString,
  address,
}) => {
  const url = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/${cloudinaryImageId}`;
  return (
    <div className="card">
      <img src={url} />
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{address}</h4>
      <h4>{costForTwoString}</h4>
    </div>
  );
};

export default RestaurantCard;
