import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";
import CheckboxUnchecked from "../assets/checkbox-unchecked.svg";
import CheckboxChecked from "../assets/checkbox-checked.svg";
import DeleteIcon from "../assets/delete.svg";
import { deleteTodo, updateTodo } from "../redux/slices/todoSlice";
// rn 은 svg 를 기본적으로 지원하지 않는다.
// react-native-svg | svg 요소 및 속성을 rn 에서 사용가능하게 해준다
// react-native-svg-transformer | svg 파일 import 해서 사용가능하게 해준다
const TodoItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <Pressable
        hitSlop={10}
        style={styles.itemCheckbox}
        onPress={() => dispatch(updateTodo(props.id))}
      >
        {props.state === "todo" ? (
          <CheckboxChecked />
        ) : (
          <CheckboxUnchecked style={styles.itemCheckboxCheckedIcon} />
        )}
      </Pressable>
      <Text
        style={[
          styles.itemText,
          props.state === "done" ? styles.itemTextChecked : "",
        ]}
      >
        {props.text}
      </Text>
      <Pressable hitSlop={10} onPress={() => dispatch(deleteTodo(props.id))}>
        <DeleteIcon />
      </Pressable>
      <Text
        style={[
          styles.deleteButton,
          props.state === "done" ? styles.deleteButtonDone : "",
        ]}
      ></Text>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: "f7f8fa",
  },
  itemCheckbox: {
    justifyContent: "center",
    alignItems: "center",
    width: 20,
    height: 20,
    marginRight: 13,
    borderRadius: 6,
  },
  itemCheckboxCheckedIcon: {
    shadowColor: "#000000",
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  itemText: {
    marginRight: "auto",
    paddingRight: 25,
    fontSize: 15,
    lineHeight: 20,
    color: "#737373",
  },
  itemTextChecked: {
    opacity: 0.3,
    textDecorationLine: "line-through",
  },
  deleteButton: {
    opacity: 0.8,
  },
  deleteButtonDone: {
    opacity: 0.3,
  },
});
