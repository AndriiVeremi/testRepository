import { StatusBar } from "expo-status-bar";
import { StyleSheet, SafeAreaView } from "react-native";
import AppLoading from 'expo-app-loading';
import { useState } from "react";
import * as Font from 'expo-font';
import RegistrationScreen from "./Screens/RegistrationScreen/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import PostsScreen from "./Screens/PostsScreen/PostsScreen";
import {gStyle} from "./styles/styles"

const fonts = () => Font.loadAsync({
  'roboto': require('./assets/fonts/Roboto-Regular.ttf'),
  'roboto-m': require('./assets/fonts/Roboto-Medium.ttf'),
  'roboto-b': require('./assets/fonts/Roboto-Bold.ttf'),
})

export default function App() {
  const [font, setFont] = useState(false)

  if(font) {
    return (
      <SafeAreaView style={styles.container}>
         <StatusBar style="auto" />
          <RegistrationScreen /> 
          {/* <LoginScreen /> */}
          {/* <PostsScreen />          */}
      </SafeAreaView>
    );
  } else {
    return (
      <AppLoading startAsync={fonts} onFinish={() => setFont(true)} onError={console.warn} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});
