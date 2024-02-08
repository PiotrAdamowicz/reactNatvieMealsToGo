import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  FlatList
} from "react-native";
import styled from "styled-components/native";

export const StyledContainer = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
export const StyledSearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
export const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16
  }
})``;
