import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View, StyleSheet } from "react-native";

import Login from "./views/login";

export default function App() {
  return (

    
    <SafeAreaView style={{flex: 1}}>
      <Login/>
    </SafeAreaView>
  );
}


