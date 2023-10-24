import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";
import { RESTAURANTS_API } from "./../utils/constants";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RESTAURANTS_API);
    const json = await data.json();
    resData =
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    resData = resData.map((res) => {
      return { data: res.info };
    });
    setRestaurantList(resData);
    setFilteredResList(resData);
  };

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
            setFilteredResList(restaurantList);
          }}
        >
          Show all restaurants
        </button>
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
