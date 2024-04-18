import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const { saveTrack } = useSaveTrack();

  return (
    <>
      <Spacer>
        <Input
          value={name}
          onChangeText={changeName}
          placeholder="Enter track name"
        />
        {recording ? (
          <Button onPress={stopRecording} title="Stop" />
        ) : (
          <Button onPress={startRecording} title="Start Recording" />
        )}
        <Spacer />
        {!recording && locations.length ? (
          <Button onPress={saveTrack} title="Save Track" />
        ) : null}
      </Spacer>
    </>
  );
};

export default TrackForm;
