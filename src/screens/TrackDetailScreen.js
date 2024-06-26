import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { Context as TrackContext } from "../context/TrackContext";
import MapView, { Polyline } from "react-native-maps";
import Spacer from "../components/Spacer";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);

  const initialCoords = track.locations[0].coords;

  return (
    <View>
      <Spacer>
        <Text h3>{track.name}</Text>
      </Spacer>
      <MapView
        style={styles.map}
        initialRegion={{
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

TrackDetailScreen.navigationOptions = () => {
  return { title: "Track Details" };
};

const styles = StyleSheet.create({
  map: { height: 300 },
});

export default TrackDetailScreen;
