import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Main from "./src";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <StatusBar style="auto" backgroundColor="#94e9f4" />

        <Main />
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}
