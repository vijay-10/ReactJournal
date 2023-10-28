import { CLOUDINARY_URL } from "./../utils/constants";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData)

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
    id,
  } = resData?.data;

  return (
    <div
      to={"/restaurants/" + id}
      className="w-[295px] my-4 p-4 hover:p-3 transition-all rounded-lg shadow-md hover:shadow-2xl bg-gray-50 hover:bg-orange-200 border border-gray-300"
    >
      <Link className="flex flex-col justify-between gap-2 border-blue-400 text-gray-600" to={"/restaurants/" + id}>
        <img
          className="rounded-lg shadow-lg mb-2 border border-gray-300"
          alt="res-logo"
          src={CLOUDINARY_URL + cloudinaryImageId}
        />
        <h3 className="text-gray-600 text-[1rem] font-bold">{name}</h3>
        <h4 className="text-sm font-semibold">[{cuisines.slice(0, 2).join(", ")}]</h4>
        <div className="flex justify-between text-sm font-bold">
          <h4>{costForTwo}</h4>
          ●
          <h4>{sla.deliveryTime} mins</h4>
          ●
          <h4 className={`border rounded-md text-white pr-2 w-fit ${avgRating > 4? 'bg-green-400': 'bg-red-500'}`}>⭐ {avgRating.toFixed(1)}</h4>
        </div>
      </Link>
    </div>
  );
};

export default RestaurantCard;
