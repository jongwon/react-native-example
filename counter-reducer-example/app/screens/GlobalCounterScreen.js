import React from "react";
import { View, Text, Button } from "react-native";
import { addCount, useSelector, useDispatch } from "../reducers";

const GlobalCounterScreen = () => {
  const counter = useSelector((store) => store.counter);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> Global Counter : {counter.count}</Text>
      <Button title="add" onPress={() => dispatch(addCount(5))} />
      <Button title="minus" onPress={() => dispatch(addCount(-2))} />
    </View>
  );
};

export default GlobalCounterScreen;
