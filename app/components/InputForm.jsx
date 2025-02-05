import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

const InputForm = () => {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Enter task" style={styles.textInput} />
      <Button title="Add" />
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "row",
  },
  textInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
    borderRadius: 5,
    color: "white",
  },
});
