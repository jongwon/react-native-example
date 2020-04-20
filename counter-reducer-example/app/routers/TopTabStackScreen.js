import React from "react";

import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import LocalCounterScreen from "../screens/LocalCounterScreen";
import GlobalCounterScreen from "../screens/GlobalCounterScreen";
import CounterStateScreen from "../screens/CounterStateScreen";

const TopTab = createMaterialTopTabNavigator();

const TopTabStackScreen = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="local" component={LocalCounterScreen} />
      <TopTab.Screen name="global" component={GlobalCounterScreen} />
      <TopTab.Screen name="state" component={CounterStateScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabStackScreen;
