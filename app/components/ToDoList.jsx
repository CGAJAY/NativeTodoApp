import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const ToDoList = ({ ToDos }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={ToDos}
        keyExtractor={(item) => item.id.toString()} // Ensure the key is a string
        renderItem={(
          { item } // Destructure item correctly
        ) => (
          <View style={styles.todoItem}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    paddingTop: 20,
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
});

export default ToDoList;
