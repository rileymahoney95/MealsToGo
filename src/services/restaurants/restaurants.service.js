import camelize from "camelize";
import { mocks } from "./mock";

export const restaurantsRequest = (location) =>
  new Promise((resolve, reject) => {
    const mock = mocks[location];
    if (!mock) {
      reject("Location not found");
    }
    resolve(mock);
  });

export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      isOpenNow: restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
