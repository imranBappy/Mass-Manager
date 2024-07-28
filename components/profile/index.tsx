import { StyleSheet, View } from "react-native";
import React from "react";
import Profile from "./Profile";
import Dashboard from "./Blance";
type Props = {};

const Index = (props: Props) => {
  return (
    <View style={styles.root}>
      <Profile />
      <Dashboard />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 18,
    paddingHorizontal: 18,

    marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
  },
});
