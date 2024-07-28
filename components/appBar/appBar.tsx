import { View, StyleSheet, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useTheme, Text } from "@ui-kitten/components";

import { useNavigation } from "@react-navigation/native";

const AppBar = () => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleDrawerOpen = (e: any) => {
    navigation.openDrawer();
  };

  return (
    <View
      style={[
        styles.appBar,
        { backgroundColor: theme["color-primary-default"] },
      ]}
    >
      <View style={styles.appBarMenu}>
        <Pressable style={styles.menuBtn} onPress={handleDrawerOpen}>
          <Entypo name="menu" size={24} color="white" />
        </Pressable>
        <Text category="h6" style={styles.title}>
          Mass Manager
        </Text>
      </View>
      <View style={styles.appBarIcons}>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="logo-whatsapp" size={25} color="white" />
        </Pressable>
        <Pressable style={styles.iconBtn}>
          <AntDesign name="message1" size={22} color="white" />
        </Pressable>
        <Pressable style={styles.iconBtn}>
          <Ionicons name="notifications" size={22} color="white" />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
    paddingVertical: 8,
    paddingHorizontal: 13,
    borderRadius: 10,

    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
  },
  appBarMenu: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  appBarIcons: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },
  title: {
    color: "white",
  },
  menuBtn: {
    padding: 5,
  },
  iconBtn: {
    padding: 5,
  },
});
export default AppBar;
