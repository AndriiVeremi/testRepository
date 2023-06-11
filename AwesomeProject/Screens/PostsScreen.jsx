import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  Pressable,
} from "react-native";

const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Публікації</Text>
      </View>
      <View style={styles.content}></View>
      <View style={styles.footer}>
        <Pressable
          style={styles.buttonLink}
          onPress={() => alert("Simple Button pressed")}
        >
          <Text style={styles.buttonLinkText}>Вже є акаунт? Увійти</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    flex: 1,
    Height: 88,

    borderBottomWidth: 1,
    borderBottomColor: "#323232",
  },
  content: {
    flex: 5,
    Height: 88,
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#323232",
    flex: 1,
    Height: 83,
  },
});

export default PostsScreen;
