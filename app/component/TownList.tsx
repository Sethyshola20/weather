import React from "react";
import { Citysearch } from "../types/Citysearch";
import AddButton from "./addButton";

const TownList = ({
  data,
  setHasBeenCalled,
  searchInput,
  towns,
  removeListOfCities,
}: {
  data: [];
  setHasBeenCalled: React.Dispatch<React.SetStateAction<boolean>>;
  searchInput: string;
  towns: string[];
  removeListOfCities: () => void;
}) => {
  return (
    <div id="town-list-container">
      <ul className="town-list">
        {data &&
          data.map((item: Citysearch) => (
            <li className="town-list-item" key={item.population}>
              {item.name}
              {towns.includes(item.name) ? (
                ""
              ) : (
                <AddButton
                  data={data}
                  towns={towns}
                  setHasBeenCalled={setHasBeenCalled}
                  searchInput={searchInput}
                  removeListOfCities={removeListOfCities}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default TownList;
