import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddButton from "../component/addButton";

test("adds city to towns array and updates hasBeenCalled state when button is clicked", () => {
  const towns = ["Paris", "London"];
  const setHasBeenCalled = jest.fn();
  const searchInput = "New York";
  const { getByText } = render(
    <AddButton
      towns={towns}
      setHasBeenCalled={setHasBeenCalled}
      searchInput={searchInput}
    />
  );
  const addButton = getByText("Add");
  fireEvent.click(addButton);
  expect(setHasBeenCalled).toHaveBeenCalledWith(false);
  expect(towns).toEqual(["Paris", "London", "New York"]);
});
