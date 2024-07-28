import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, useTheme, Card } from "@ui-kitten/components";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
type Props = {};

const Dashboard = (props: Props) => {
  const theme = useTheme();
  return (
    <View>
      <View style={{ gap: 20, marginTop: 15 }}>
        <View style={styles.container}>
          <Card
            style={{
              flex:1
            }}
          >
            <View style={styles.item}>
              <View>
                <Entypo
                  name="shopping-cart"
                  size={28}
                  color={theme["color-primary-default"]}
                />
                <Text style={{ fontSize: 14 }}>Bazar Cost</Text>
              </View>
              <Text category="h2">100</Text>
            </View>
          </Card>
          <Card
            style={{
              flex:1
            }}
          >
            <View style={styles.item}>
              <View>
                <MaterialIcons
                  name="set-meal"
                  size={28}
                  color={theme["color-primary-default"]}
                />
                <Text style={{ fontSize: 14 }}>Total Meal</Text>
              </View>
              <Text category="h2">100</Text>
            </View>
          </Card>
        </View>
        <View style={styles.container}>
          <Card
            style={{
              flex:1
            }}
          >
            <View style={styles.item}>
              <View>
                <MaterialCommunityIcons
                  name="food-apple"
                  size={28}
                  color={theme["color-primary-default"]}
                />
                <Text style={{ fontSize: 14 }}>My Meal</Text>
              </View>
              <Text category="h2">100</Text>
            </View>
          </Card>
          <Card
            style={{
              flex:1
            }}
          >
            <View style={styles.item}>
              <View>
                <Feather
                  name="trending-up"
                  size={28}
                  color={theme["color-primary-default"]}
                />
                <Text style={{ fontSize: 14 }}>Meal Rate</Text>
              </View>
              <Text category="h2">100</Text>
            </View>
          </Card>
        </View>
      </View>
    </View>
  );
};

export default Dashboard;
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  item: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    flexDirection: "row",
  },
});
