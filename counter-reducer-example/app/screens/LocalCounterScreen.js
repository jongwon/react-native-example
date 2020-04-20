import React, { useReducer } from "react";
import { View, Text, Button } from "react-native";

const LocalCounterScreen = () => {
  const [counter, dispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "add":
          return { count: prevState.count + action.payload };
        default:
          return prevState;
      }
    },
    { count: 1 }
  );

  const add = (count = 1) => {
    dispatch({
      type: "add",
      payload: count,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Local Counter : {counter.count}</Text>
      <Button title="add" onPress={() => add(1)} />
      <Button title="minus" onPress={() => add(-1)} />
    </View>
  );
};

export default LocalCounterScreen;
