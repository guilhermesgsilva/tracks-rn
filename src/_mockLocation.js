import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocations = (increment) => {
  return {
    timestamp: 10000000,
    coords: {
      speed: 0,
      heading: 0,
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      longitude: -9.209122496474873 + increment * tenMetersWithDegrees,
      latitude: 38.76589976185555 + increment * tenMetersWithDegrees,
    },
  };
};

let counter = 0;

setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocations(counter),
  });
  counter++;
}, 1000);
