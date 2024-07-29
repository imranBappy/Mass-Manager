import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Input } from "@ui-kitten/components";
import { Text, Button } from "@ui-kitten/components";
import { Link } from "expo-router";

export default function SignIn() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  return (
    <View style={styles.root}>
      <Text style={[styles.text, { marginTop: 50 }]} category="h1">
        Mass Manager
      </Text>
      <View style={styles.formWrap}>
        <Input
          keyboardType="email-address"
          label={"Email"}
          placeholder="Enter your email"
          value={credential.email}
          onChangeText={(nextValue) =>
            setCredential((preState) => ({ ...preState, email: nextValue }))
          }
        />
        <Input
          secureTextEntry={true}
          label={"Password"}
          placeholder="Enter your password"
          value={credential.password}
          onChangeText={(nextValue) =>
            setCredential((preState) => ({ ...preState, password: nextValue }))
          }
        />
        <Button>Login</Button>
        <Text style={styles.text}>
          <Link href="/forget">Forgotter Password?</Link>
        </Text>
      </View>
      <View style={styles.footer}>
        <Link href="/sign-up" asChild>
          <Button appearance="outline">Create new account</Button>
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
