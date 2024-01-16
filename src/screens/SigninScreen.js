import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Signin Screen</Text>
      <Button
        title="Go to Signup Screen"
        onPress={() => navigation.navigate("Signup")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: { fontSize: 48 },
});

export default SigninScreen;
