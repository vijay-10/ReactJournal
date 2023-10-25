import { CLOUDINARY_URL } from "./../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
    id,
  } = resData?.data;

  return (
    <div
      to={"/restaurants/" + id}
      className="res-card"
      style={{ backgroundColor: "#f0f0f0" }}
    >
      <Link to={"/restaurants/" + id}>
        <img
          className="res-logo"
          alt="res-logo"
          src={CLOUDINARY_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>₹{costForTwo / 100} FOR TWO</h4>
        <h4>{deliveryTime} minutes</h4>
      </Link>
    </div>
  );
};

export default RestaurantCard;
