import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* screenOptions={{ headerShown: false }} */}
      <Drawer initialRouteName="(tabs)" screenOptions={{ headerShown: false }}>
        <Drawer.Screen
          name="(tabs)" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "overview",
          }}
        />
        <Drawer.Screen
          name="history" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "History",
            title: "History",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
