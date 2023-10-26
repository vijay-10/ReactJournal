import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { LOCATION_API, RESTAURANTS_API } from "./../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  const [location, setLocation] = useState("hyderabad");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const locationData = await fetch(LOCATION_API + location);
    const locationJson = await locationData.json();
    const { lat, lon } = locationJson[0];

    const data = await fetch(RESTAURANTS_API + `lat=${lat}&lng=${lon}`);
    const json = await data.json();
    let resData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;

    resData = resData.map((res) => {
      return { data: res.info };
    });
    setRestaurantList(resData);
    setFilteredResList(resData);
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
      <h1>Seems like you're offline!!! Please check your internet connection.</h1>
    )
  }

  return (
    <div className="body">
      <div className="filter">
        <form>
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              // this will filter simultaneously as we enter text:-
              // const filteredList = restaurantList.filter((res) =>
              //   res.data.name.toLowerCase().includes(searchText.toLowerCase())
              // );
              // setFilteredResList(filteredList);
            }}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault(); //since the button is inside form, refresing the page is default behavior of form on submit
              const filteredList = restaurantList.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResList(filteredList);
            }}
          >
            Search
          </button>
        </form>
        <button
          onClick={() => {
            setFilteredResList(
              restaurantList.filter((res) => res.data.avgRating > 4)
            );
          }}
        >
          Filter top restaurants
        </button>
      </div>
      {restaurantList.length ? (
        <div className="res-container">
          {filteredResList.map((restaurant) => (
            <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          ))}
          {/* {filteredResList.map((restaurant) => (
            <Link key={restaurant.data.id} to={"/restaurants/"+restaurant.data.id}><RestaurantCard resData={restaurant} /></Link>
          ))} */}
        </div>
      ) : (
        <Shimmer />
      )}
    </div>
  );
};

export default Body;
