import { Tabs } from "expo-router";
import React from "react";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { useTheme } from "@ui-kitten/components";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "primary",
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          paddingTop: 10,
        },
        tabBarLabelStyle: {
          marginTop: 3,
          fontSize: 12,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "home" : "home-outline"}
              color={focused ? theme["color-primary-default"] : color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="meal"
        options={{
          title: "Meal",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "fast-food" : "fast-food-outline"}
              color={focused ? theme["color-primary-default"] : color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon
              name={focused ? "person" : "person-outline"}
              color={focused ? theme["color-primary-default"] : color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
