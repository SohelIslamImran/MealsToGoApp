import styled from "styled-components/native";
import { StatusBar } from "react-native";
import MapView from "react-native-maps";

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`;

export const MapSearchContainer = styled.View`
  width: 100%;
  position: absolute;
  top: ${StatusBar.currentHeight ? `${StatusBar.currentHeight}px` : "40px"};
  z-index: 1;
  padding: ${({ theme }) => theme.space[3]};
`;
