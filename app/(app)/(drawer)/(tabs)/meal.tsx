import { StyleSheet, View, ScrollView } from "react-native";
import AppBar from "@/components/appBar/appBar";

import MealTable from "@/components/MealTable";

export default function MealScreen() {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        {/* <AppBar /> */}
        <View style={{ marginTop: 30 }} />
        <MealTable />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
