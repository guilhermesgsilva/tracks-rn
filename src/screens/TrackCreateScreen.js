import "../_mockLocation";
import React, { useCallback, useContext, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { SafeAreaView, withNavigationFocus } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import Map from "../components/Map";
import { Context as LocationContext } from "../context/LocationContext";
import useLocation from "../hooks/useLocation";
import TrackForm from "../components/TrackForm";
import Spacer from "../components/Spacer";

const TrackCreateScreen = ({ isFocused }) => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);
  const callback = useCallback(
    (location) => {
      return addLocation(location, recording);
    },
    [recording]
  );
  const { err } = useLocation({
    callback,
    shouldTrack: isFocused || recording,
  });

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Create a Track</Text>
      </Spacer>
      <Map />
      <TrackForm />
      <Spacer>
        {err ? (
          <Text>Please enable location services.</Text>
        ) : (
          <Text>Location services enabled.</Text>
        )}
      </Spacer>
    </SafeAreaView>
  );
};

TrackCreateScreen.navigationOptions = () => {
  return {
    title: "Add Track",
    tabBarIcon: <FontAwesome name="plus" size={15} />,
  };
};

export default withNavigationFocus(TrackCreateScreen);
