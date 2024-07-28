import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text, useTheme } from "@ui-kitten/components";
import Ionicons from "@expo/vector-icons/Ionicons";

type Props = {};
const Dashboard = (props: Props) => {
  const theme = useTheme();
  return (
    <View>
      <View>
        <Text style={styles.text} category="h1">{`$${100}`}</Text>
      </View>
      <View style={styles.btns}>
        <Button
          style={{ flex: 1 }}
          appearance="outline"
          status="primary"
          accessoryLeft={
            <Ionicons
              name="trending-down"
              size={24}
              color={theme["color-primary-default"]}
            />
          }
        >
          Deposit
        </Button>
        <Button
          style={{ flex: 1 }}
          appearance="outline"
          status="primary"
          accessoryLeft={
            <Ionicons
              name="trending-up"
              size={24}
              color={theme["color-primary-default"]}
            />
          }
        >
          Withdraw
        </Button>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 45,
  },
  btns: {
    marginTop: 25,
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
});
