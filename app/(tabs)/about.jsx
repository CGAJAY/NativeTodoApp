import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function about() {
  return (
    <View>
      <Text style={styles.text}>about</Text>
      <Link style={styles.link} href="/contact">
        Go to Contact
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 42,
  },
  link: {
    color: "green",
    fontSize: 42,
    backgroundColor: "white",
    padding: 4,
    textDecorationLine: "underline",
  },
});
