import React, { useContext } from "react";
import styled from "styled-components";
import { View } from "react-native";

import { RestaurantContext } from "../../../../src/services/restaurants/restaurants.context";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { RestaurantList } from "../components/restaurant-list.styles";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => {
  const restaurantContext = useContext(RestaurantContext);

  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar placeholder="Search" />
      </SearchContainer>
      <RestaurantList
        data={restaurantContext.restaurants}
        renderItem={(restaurant) => (
          <RestaurantInfoCard restaurant={restaurant} />
        )}
        keyExtractor={(restaurant) => restaurant.id}
      />
    </SafeArea>
  );
};
