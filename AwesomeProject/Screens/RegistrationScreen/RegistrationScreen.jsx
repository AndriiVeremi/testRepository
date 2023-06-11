import React, { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  Button,
  Alert,
} from "react-native";
import Bg from "../../Images/photoBG.jpg";
import Icon from "react-native-vector-icons/AntDesign";

const RegistrationScreen = () => {

  const [userName, setUserName] = useState("");
  const onChange = (userName) => {
    setUserName(userName);
  };

  const handleButtonPress = () => alert("Simple Button pressed");

  return (
    <View style={styles.container}>
      <ImageBackground source={Bg} resizeMode="cover" style={styles.imageBg}>
        <View style={styles.containerForm}>
          <View style={styles.containerCont}>
            <Image style={styles.avatar}></Image>
            <Icon style={styles.icon} name="pluscircleo" size={25} />
            <Text style={styles.titleText}>Реєстрація</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChange}
              username
              placeholder="Логін"
            />
            <TextInput
              style={styles.input}
              email
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={styles.input}
              current-password
              placeholder="Пароль"
            > 
            <Text style={styles.inputText}>Прказати</Text>
            </TextInput>

            <Pressable
              style={styles.button}
              // onPress={() =>
              //   Alert.alert("Simple Button pressed", "ssssss", [
              //     { text: "Да", onPress: () => console.log("message") },
              //     { text: "Нет" },
              //   ])
              // }
            >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </Pressable>

            <Pressable
              style={styles.buttonLink}
              onPress={() => alert("Simple Button pressed")}
            >
              <Text style={styles.buttonLinkText}>Вже є акаунт? Увійти</Text>
            </Pressable>
          </View>
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
    // flex: 0.5,
    padding: 15,
    backgroundColor: "#fff",
    width: "100%",
    height: 549,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 16,
  },

  containerCont: {
    top: -75,
    alignItems: "center",
  },

  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    marginBottom: 33,
  },

  icon: {
    color: "#FF6C00",
    position: "absolute",
    right: 119,
    top: 80,
  },

  titleText: {
    color: "#212121",
    fontSize: 42,
    lineHeight: 44,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: 30,
    textAlign: "center",
    letterSpacing: 0.01,
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

  inputText: {
    position: "relative",
    fontFamily: 'Roboto',
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    left: 30,
    top: 30,
    color: "#1B4371",
  },

  button: {
    marginTop: 27,
    alignItems: "center",
    backgroundColor: "#FF6C00",
    padding: 10,
    borderRadius: 43,
    color: "#1B4371",
    width: "100%",
    height: 55,
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    marginVertical: 5,
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

export default RegistrationScreen;
