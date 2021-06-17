import React, { useContext, useEffect, useState } from "react";

import Search from "../../../components/Search";
import { LocationContext } from "../../../services/location/LocationContext";
import { RestaurantsContext } from "../../../services/restaurants/RestaurantsContext";
import { Map, MapSearchContainer } from "../styles/map";
import CompactRestaurantInfo from "../../../components/CompactRestaurantInfo";

const MapScreen = ({ navigation }) => {
  const { location } = useContext(LocationContext);
  const { restaurants = [] } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);

  const { lat, lng, viewport } = location;

  useEffect(() => {
    if (viewport) {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
      setLatDelta(northeastLat - southwestLat);
    }
  }, [location, viewport]);

  return (
    <>
      <MapSearchContainer>
        <Search icon="map" />
      </MapSearchContainer>
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, idx) => {
          return (
            <Map.Marker
              key={restaurant.name + idx}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Map.Callout
                onPress={() =>
                  navigation.navigate("RestaurantDetail", { restaurant })
                }
              >
                <CompactRestaurantInfo isMap restaurant={restaurant} />
              </Map.Callout>
            </Map.Marker>
          );
        })}
      </Map>
    </>
  );
};

export default MapScreen;
