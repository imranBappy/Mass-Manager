import { StyleSheet, View } from "react-native";
import React from "react";
import { Card, Text, useTheme } from "@ui-kitten/components";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
type Props = {};

const Operations = (props: Props) => {
  const theme = useTheme();
  return (
    <Card style={styles.root}>
      <Text category="h5">Operations</Text>
      <View style={{ gap: 20, marginTop: 15 }}>
        <View style={styles.container}>
          <View style={styles.item}>
            <Entypo
              name="wallet"
              size={28}
              color={theme["color-primary-default"]}
            />
            <Text style={{ fontSize: 17 }}>My Wallet</Text>
          </View>
          <View style={styles.item}>
            <Ionicons
              name="fast-food"
              size={28}
              color={theme["color-primary-default"]}
            />
            <Text style={{ fontSize: 17 }}>My Meal</Text>
          </View>
          <View style={styles.item}>
            <Entypo
              name="shop"
              size={28}
              color={theme["color-primary-default"]}
            />
            <Text style={{ fontSize: 17 }}>Bazar Date</Text>
          </View>
        </View>
        <View style={styles.container}>
          <View style={styles.item}>
            <FontAwesome6
              name="money-check-dollar"
              size={28}
              color={theme["color-primary-default"]}
            />
            <Text style={{ fontSize: 17 }}>Meal Cost</Text>
          </View>
          <View style={styles.item}>
            <MaterialCommunityIcons
              name="bank"
              size={28}
              color={theme["color-primary-default"]}
            />
            <Text style={{ fontSize: 17 }}>Mess wallet</Text>
          </View>
          <View style={styles.item}>
            <FontAwesome
              name="history"
              size={28}
              color={theme["color-primary-default"]}
            />
            <Text style={{ fontSize: 17 }}>History</Text>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default Operations;
const styles = StyleSheet.create({
  root: {
    flex: 1,
    marginTop: 20,
  },
  container: {
    flexDirection: "row",
    gap: 12,
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
  },
});
