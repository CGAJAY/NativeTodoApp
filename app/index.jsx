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

  // Function to delete a todo item from the list
  const handleDeleteTodo = (id) => {
    // filter out the todo item with the matching id
    const newTodos = initialTodos.filter((todo) => todo.id !== id);
    // Update the todos array with the new list of todos
    setinitialTodos(newTodos);
  }

  //Function to edit a todo item in the list
  const handleEditTodo = (id) => {
    // Prompt the user to enter a new name for the todo item
    const newName = prompt('Enter new name');
    // Check if the user entered a new name
    if(newName.trim()  && newName){
      setinitialTodos(initialTodos.map((myTodo) => 
        // Check if the id of the todo item matches the id passed to the function
        myTodo.id === id ? {...myTodo, name: newName} : myTodo
       ))
    } 
    
  }
  // Function to toggle the completed status of a todo item
  const handleToggleComplete = (id) => {
    // Update the completed status of the todo item with the matching id
    setinitialTodos(initialTodos.map((myTodo) => myTodo.id === id? {...myTodo, completed: !myTodo.completed} : myTodo))
  }
  return (
    <View style={styles.container}>
      {/* Pass the handleAddToDo function as a prop to the InputForm component */}
      <InputForm onAddTodo={handleAddToDo}  />  
      {/*  Pass the todos array as a prop to the ToDoList component */}
      <ToDoList ToDos={initialTodos}  onDeleteTodo={handleDeleteTodo} onEditTodo={handleEditTodo} onToggleTodo={handleToggleComplete}/> 
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
