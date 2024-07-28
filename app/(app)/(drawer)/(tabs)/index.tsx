import { StyleSheet, View, ScrollView } from "react-native";
import AppBar from "@/components/appBar/appBar";
import Profile from "@/components/profile";
import Operations from "@/components/Oparations";
import Dashboard from "@/components/Dashboard";
import AddMeal from "@/components/Meal/AddMeal";

export default function HomeScreen() {
  return (
    <ScrollView style={styles.root}>
      <View style={styles.container}>
        <AppBar />
        <Profile />
        <Dashboard />
        <AddMeal/>
        <Operations />
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
