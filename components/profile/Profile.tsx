import { StyleSheet, View } from "react-native";
import React from "react";
import { Avatar, Text } from "@ui-kitten/components";

type Props = {};

const Profile = (props: Props) => {
  return (
    <View style={styles.root}>
      <View>
        <Avatar src="https://imranbappy.netlify.app/_ipx/w_640,q_75/%2F_next%2Fstatic%2Fmedia%2Fimran-hosen.51750c04.png?url=%2F_next%2Fstatic%2Fmedia%2Fimran-hosen.51750c04.png&w=640&q=75" />
      </View>
      <View>
        <Text category="h6" style={{ fontWeight: "bold" }}>
          Imran Hossen
        </Text>
        <Text>Welcome Back!</Text>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  root: {
    marginTop: 10,
    marginBottom: 20,
    flex: 1,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
});
