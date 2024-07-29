import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text, Modal, CheckBox } from "@ui-kitten/components";
import { Entypo } from "@expo/vector-icons";
import { useTheme } from "@ui-kitten/components/theme";
type Props = {};

const AddMeal = (props: Props) => {
  const [visible, setVisible] = React.useState(false);

  const [activeChecked, setActiveChecked] = React.useState(false);

  const theme = useTheme();

  return (
    <>
      <Card style={{ flex: 1, paddingVertical: 0, marginTop: 20 }}>
        <View style={styles.root}>
          <Text category="h6">Add your meal</Text>
          <Button status="primary" onPress={() => setVisible(true)}>
            Add Meal
          </Button>
        </View>
      </Card>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}
        // style={{ width: "90%" }}
      >
        <Card disabled={true}>
          <Text>Welcome to UI Kitten </Text>
          <View style={{ marginTop: 10 }}>
            <View style={{ flex: 1, gap: 10 }}>
              <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
                <Button
                  appearance="outline"
                  accessoryRight={
                    <Entypo
                      name="plus"
                      size={25}
                      color={theme["color-primary-default"]}
                    />
                  }
                  style={{ width: 115 }}
                >
                  Breakfast
                </Button>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                  }}
                >
                  <Text category="h4">10</Text>
                </View>
                <Button
                  style={{ width: 115 }}
                  appearance="outline"
                  accessoryRight={
                    <Entypo
                      name="minus"
                      size={25}
                      color={theme["color-primary-default"]}
                    />
                  }
                >
                  Breakfast
                </Button>
              </View>
              <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
                <Button
                  style={{ width: 115 }}
                  appearance="outline"
                  accessoryRight={
                    <Entypo
                      name="plus"
                      size={25}
                      color={theme["color-primary-default"]}
                    />
                  }
                >
                  Lunch
                </Button>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                  }}
                >
                  <Text category="h4">10</Text>
                </View>
                <Button
                  style={{ width: 115 }}
                  appearance="outline"
                  accessoryRight={
                    <Entypo
                      name="minus"
                      size={25}
                      color={theme["color-primary-default"]}
                    />
                  }
                >
                  Lunch
                </Button>
              </View>
              <View style={{ flex: 1, flexDirection: "row", gap: 8 }}>
                <Button
                  style={{ width: 115 }}
                  appearance="outline"
                  accessoryRight={
                    <Entypo
                      name="plus"
                      size={25}
                      color={theme["color-primary-default"]}
                    />
                  }
                >
                  Dinner
                </Button>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    width: 50,
                  }}
                >
                  <Text category="h4">10</Text>
                </View>
                <Button
                  style={{ width: 115 }}
                  appearance="outline"
                  accessoryRight={
                    <Entypo
                      name="minus"
                      size={25}
                      color={theme["color-primary-default"]}
                    />
                  }
                >
                  Dinner
                </Button>
              </View>
            </View>
            <View
              style={{
                marginTop: 15,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <CheckBox
                checked={activeChecked}
                onChange={(nextChecked) => setActiveChecked(nextChecked)}
              >
                Auto
              </CheckBox>
              <Button onPress={() => setActiveChecked(false)}>Confirm</Button>
            </View>
          </View>
        </Card>
      </Modal>
    </>
  );
};

export default AddMeal;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container: {
    minHeight: 192,
  },
  backdrop: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});
