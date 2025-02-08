import { View, StyleSheet } from "react-native";
import React, { useState } from "react";
import InputForm from "./components/InputForm"; 
import ToDoList from "./components/ToDoList";
import toDos from "./data/toDos.js";

const app = () => {
  // Set the initial state of the todos array to the toDos array from the data file 
  const [initialTodos, setinitialTodos] = useState(toDos);

  // Function to add a new todo item to the list 
  const handleAddToDo = (name) => {
    // Create a new todo object with the name and id 
    const newTodo = {
      id: Date.now(), // Use the current date and time as the id
      name, // Set the name to the argument passed to the function
      compeleted: false, // Set the completed status to false
    };
    // Add the new todo to the list of todos
    setinitialTodos([...toDos, newTodo]);
  };
  return (
    <View style={styles.container}>
      {/* Pass the handleAddToDo function as a prop to the InputForm component */}
      <InputForm onAddTodo={handleAddToDo} />  
      {/*  Pass the todos array as a prop to the ToDoList component */}
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
