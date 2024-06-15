import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  console.log("HomeScreen");
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, color: "#FFFFFF" }}>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
  },
});
