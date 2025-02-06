import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";

const InputForm = ({ onAddTodo }) => {
  const [todo, setTodo] = useState("");

  const handleAddToDo = () => {
    if (todo.trim()) {
      onAddTodo(todo);
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
