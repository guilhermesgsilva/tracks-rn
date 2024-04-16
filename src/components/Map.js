import React, { useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Circle } from "react-native-maps";
import { Context as LocationContext } from "../context/LocationContext";

export const INITIAL_LOCATION = {
  longitude: -9.209122496474873,
  latitude: 38.76589976185555,
};

const Map = () => {
  const {
    state: { currentLocation },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...INITIAL_LOCATION,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={60}
        strokeColor="rgba(158,158,255,1.0)"
        fillColor="rgba(158,158,255,0.3)"
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
});

export default Map;
