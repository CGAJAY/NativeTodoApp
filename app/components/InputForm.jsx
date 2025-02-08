import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

// input form component to add new todo
const InputForm = ({ onAddTodo }) => {
  // state to store todo
  const [todo, setTodo] = useState("");

  // function to add todo
  const handleAddToDo = () => {
    // check if todo is not empty
    if (todo.trim()) {
      // call onAddTodo function from parent component and pass todo as argument 
      onAddTodo(todo);
      // clear todo
      setTodo("");
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={todo}
        placeholder="Enter task"
        onChangeText={setTodo}
        style={styles.textInput}
      />
      <Button onPress={handleAddToDo} title="Add" />
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
    color: "black",
  },
});
