import resList from "../utils/data";
import RestaurantCard from './RestaurantCard'
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="search">Search</div>
      <button onClick={() => {
        setRestaurantList(resList)
      }}>Show all restaurants</button>
      <button onClick={() => {
        setRestaurantList(restaurantList.filter(res => res.data.avgRating > 4))
      }}>Filter top restaurants</button>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
