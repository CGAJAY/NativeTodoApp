import { View, StyleSheet } from "react-native";
import React from "react";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import toDos from "./data/toDos.js";

const app = () => {
  return (
    <View style={styles.container}>
      <InputForm />
      <ToDoList ToDos={toDos} />
    </View>
  );
};

export default app;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    flex: 1,
  },
});
