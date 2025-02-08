import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

// ToDoList component to display list of todos
const ToDoList = ({ ToDos }) => {

  // function to render each todo item in the list 
  const renderItem = ({ item }) => (
    <View style={styles.container}>
      <Text style={styles.renderText}>{item.name}</Text>
      <View style={styles.renderButton}>
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  return (
    <FlatList
      data={ToDos} // Pass the todos array to the FlatList
      // Set the key for each item in the list to the id of the todo item 
      keyExtractor={(item) => item.id.toString()} 
      // Call the renderItem function for each item in the list 
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "black",
    padding: 10,
  },
  text: {
    color: "black",
    fontSize: 16,
  },
  todoItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  renderButton: {
    flexDirection: "row",
    gap: 10,
    paddingRight: 40,
  },
  editButton: {
    backgroundColor: "green",
  },
  deleteButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    margin: 4,
  },
});

export default ToDoList;
