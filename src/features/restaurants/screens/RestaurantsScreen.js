import { useState } from "react";
import { FlatList, SafeAreaView, StatusBar } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import styled from "styled-components/native";
import {
  StyledContainer,
  StyledSearchContainer,
  StyledSafeAreaView,
  RestaurantList
} from "./RestaurantsScreenStyles";

const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <StyledContainer>
      <StyledSafeAreaView>
        <StyledSearchContainer>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
          />
        </StyledSearchContainer>
        <RestaurantList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={({}) => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
        />
      </StyledSafeAreaView>
    </StyledContainer>
  );
};

export default RestaurantsScreen;
