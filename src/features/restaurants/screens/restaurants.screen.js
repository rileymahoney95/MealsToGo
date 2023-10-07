import React from "react";
import styled from "styled-components";
import {
  SafeAreaView,
  View,
  StatusBar,
} from "react-native";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { Searchbar } from "react-native-paper";
import { RestaurantList } from "../components/restaurant-list.styles";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

const SearchContainer = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
 
const data = [
    {
        id: 1  
    },
    {
        id: 2
    },
    {
        id: 3
    },
    {
        id: 4
    }
];

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar placeholder="Search" />
    </SearchContainer>
    <RestaurantList
        data={data}
        renderItem={(restaurant) => <RestaurantInfoCard restaurant={restaurant} />}
        keyExtractor={restaurant => restaurant.id}
    />
  </SafeArea>
);
