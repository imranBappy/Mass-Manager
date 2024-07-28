import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@ui-kitten/components";
import { Text, Button } from "@ui-kitten/components";
import { Link } from "expo-router";

export default function SignIn() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  return (
    <View style={styles.root}>
      <Text style={[styles.text, { marginTop: 50 }]} category="h1">
        Match Manager
      </Text>
      <View style={styles.formWrap}>
        <Input
          label={"Name"}
          placeholder="Enter your name"
          value={user.name}
          onChangeText={(nextValue) =>
            setUser((preState) => ({ ...preState, name: nextValue }))
          }
        />
        <Input
          keyboardType="phone-pad"
          label={"Phone"}
          placeholder="Enter your phone"
          value={user.phone}
          onChangeText={(nextValue) =>
            setUser((preState) => ({ ...preState, phone: nextValue }))
          }
        />
        <Input
          keyboardType="email-address"
          autoComplete="email"
          label={"Email"}
          placeholder="Enter your email"
          value={user.email}
          onChangeText={(nextValue) =>
            setUser((preState) => ({ ...preState, email: nextValue }))
          }
        />
        <Input
          secureTextEntry={true}
          autoComplete={"password"}
          label={"Password"}
          placeholder="Enter your password"
          value={user.password}
          onChangeText={(nextValue) =>
            setUser((preState) => ({ ...preState, password: nextValue }))
          }
        />
        <Button>Register</Button>
        {/* <Text style={styles.text}>
          <Link href="/forget">Forgotter Password?</Link>
        </Text> */}
      </View>
      <View style={styles.footer}>
        <Link href="/sign-in" asChild>
          <Button appearance="outline">I have a account</Button>
        </Link>
        <Text appearance="hint" style={[styles.text]}>
          <Link href="https://imranbappy.netlify.app/">
            Developed by <Text status="primary">Eng. Imran Hossen</Text>
          </Link>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 20,
    justifyContent: "space-between",
  },
  text: {
    textAlign: "center",
  },
  formWrap: {
    gap: 15,
    height: "70%",
  },
  footer: {
    gap: 15,
  },
});
