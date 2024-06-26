import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { SafeAreaView } from "react-navigation";
import { FontAwesome } from "@expo/vector-icons";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Spacer>
        <Text h3>Account Screen</Text>
      </Spacer>
      <Spacer>
        <Button title={"Sign Out"} onPress={signout} />
      </Spacer>
    </SafeAreaView>
  );
};

AccountScreen.navigationOptions = () => {
  return {
    title: "Account",
    tabBarIcon: <FontAwesome name="gear" size={15} />,
  };
};

export default AccountScreen;
