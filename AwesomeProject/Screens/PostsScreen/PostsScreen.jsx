import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Публікації</Text>
        <AntDesign name="logout" size={24} color="black" />
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <MaterialIcons name="grid-view" size={24} color="#212121" />
        <Pressable
          style={styles.buttonLink}
          onPress={() => alert("Simple Button pressed")}
        >
          <AntDesign name="plus" size={24} color="white" />
        </Pressable>
        <AntDesign name="user" size={24} color="#212121" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#BDBDBD",
  },

  title: {
    fontSize: 17,
    textAlign: "center",
    color: " #212121",
  },

  content: {
    flex: 5,
    height: 88,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    borderTopWidth: 1,
    borderTopColor: "#BDBDBD",
    height: 83,
    alignItems: "center",
  },

  buttonLink: {
    color: "#FF6C00",
    borderRadius: 20,
    paddingVertical: 7,
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    alignItems: "center",
    marginHorizontal: 31,
  },
});

export default PostsScreen;
