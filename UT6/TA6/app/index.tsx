import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import IndexContent from "./indexContent";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <IndexContent />
    </GestureHandlerRootView>
  );
}
