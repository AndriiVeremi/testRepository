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
import { gStyle } from "../../styles/styles";

const LoginScreen = () => {
  return (
    <View style={gStyle.container}>
      <ImageBackground source={Bg} resizeMode="cover" style={gStyle.imageBg}>
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
            <Text style={styles.buttonLinkText}>
              Немає акаунту? Зареєструватися
            </Text>
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  containerForm: {
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
    textAlign: "center",
    fontFamily: "roboto-b",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.01,
    marginTop: 32,
    marginBottom: 33,
  },

  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    height: 50,
    alignItems: "center",
    width: "100%",
    marginBottom: 16,
    borderWidth: 1,
    padding: 10,
    fontSize: 16,
    color: "#BDBDBD",
    fontFamily: "roboto",
  },

  button: {
    marginTop: 27,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 15,
    borderRadius: 100,
    color: "#1B4371",
    width: "100%",
    height: 51,
    marginBottom: 16,
    fontSize: 16,
    fontFamily: "roboto",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "roboto",
  },

  buttonLink: {
    alignItems: "center",
    padding: 10,
  },

  buttonLinkText: {
    fontFamily: "roboto",
    color: "#1B4371",
    fontSize: 16,
  },
});

export default LoginScreen;
