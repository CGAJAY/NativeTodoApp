import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputForm from "./components/InputForm";
import ToDoList from "./components/ToDoList";
import toDos from "./data/toDos.js";

const app = () => {
  const [initialTodos, setinitialTodos] = useState(toDos);

  const handleAddToDo = (name) => {
    const newTodo = {
      id: Date.now(),
      name,
      compeleted: false,
    };
    setinitialTodos([...toDos, newTodo]);
  };
  return (
    <View style={styles.container}>
      <InputForm onAddTodo={handleAddToDo} />
      <ToDoList ToDos={initialTodos} />
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
