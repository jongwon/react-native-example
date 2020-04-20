import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const CounterStateScreen = () => {
  const [count, setCount] = useState(1);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text> state: {count} </Text>
      <Button title="add" onPress={() => setCount(count + 1)} />
      <Button title="minus" onPress={() => setCount(count - 1)} />
    </View>
  );
};

export default CounterStateScreen;
