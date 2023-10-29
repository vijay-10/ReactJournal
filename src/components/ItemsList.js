import React from "react";
import { CLOUDINARY_URL } from "./../utils/constants";

const ItemsList = ({ category }) => {
  return (
    <div className="items flex flex-col py-4 gap-2">
      {/* always use optional chaining idk why but it threw "TypeError: Cannot read properties of undefined (reading 'map')" error 
        and when i used optional chaining it's working */}
      {category?.itemCards?.map((item) => (
        <div
          className="flex justify-between border-b py-4 border-gray-400"
          key={item.card.info.id}
        >
          <div className="flex flex-col w-10/12">
            <span className="font-semibold">{item.card.info.name}</span>
            <span className="tracking-wider">
              {console.log(item.card.info)}₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <div className="text-sm text-gray-400">
              {item.card.info.description}
            </div>
          </div>
          <div className="2/12 relative w-36">
            <button className="absolute bottom-0 left-9 bg-orange-400 text-white font-semibold px-2 py-1 rounded-md shadow-md">
              ADD +
            </button>
            {item.card.info.imageId && (
              <img
                className="rounded-lg"
                src={CLOUDINARY_URL + item.card.info.imageId}
              ></img>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemsList;
