import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
  Pressable,
} from "react-native";
import Bg from "../../Images/photoBG.jpg";

const LoginScreen = () => {

  return (
    <View style={styles.container}>
      <ImageBackground source={Bg} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.containerForm}>
            <Text style={styles.titleText}>Увійти</Text>
            <TextInput
              style={styles.input}
              email
              // onChangeText={onChangeText}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={styles.input}
              current-password
              // onChangeText={onChangeText}
              placeholder="Пароль"
            />

            <Pressable
              style={styles.button}
              onPress={() => Alert.alert("Simple Button pressed")}
            >
              <Text style={styles.buttonText}>Увійти</Text>
            </Pressable>

            <Pressable
              style={styles.buttonLink}
              onPress={() => Alert.alert("Simple Button pressed")}
            >
              <Text style={styles.buttonLinkText}>Немає акаунту? Зареєструватися</Text>
            </Pressable>
          </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imageBg: {
    flex: 1,
    justifyContent: "flex-end",
    width: null,
    height: null,
  },

  containerForm: {
    // flex: 0.6,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    width: "100%",
    height: 489,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  titleText: {
    color: "#212121",
    fontSize: 42,
    lineHeight: 35,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop:32,
    marginBottom: 33,
  },

  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
  },

  button: {
    marginTop: 27,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 10,
    borderRadius: 43,
    color: "#1B4371",
    width: "100%",
    height: 51,
    marginBottom: 16,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
  },

  buttonLink: {
    alignItems: "center",
    padding: 10,
  },

  buttonLinkText: {
    color: "#1B4371",
    fontSize: 16,
  },
});

export default LoginScreen;
