import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import firebase from "../database/firebaseDB";
const auth = firebase.auth();

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  async function login() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
      setErrorText(error.message);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat App</Text>

      <Text style={styles.fieldTitle}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />

      <Text style={styles.fieldTitle}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        secureTextEntry={true}
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      <TouchableOpacity style={styles.loginButton} onPress={login}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <Text style={styles.errorText}>{errorText}</Text>
    </View>
  );
}



const styles = StyleSheet.create({

  errorText: {
    color: "red",
    textAlign: "center",
    marginVertical: 20,
    textTransform: "uppercase",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    backgroundColor: "#D9D1C0",
  },

  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
    color: "#D9896C",
  },

  fieldTitle: {
    fontSize: 14,
    marginBottom: 2,
    color: "#D9896C",

  },
  
  input: {
    borderWidth: 1,
    marginBottom: 24,
    padding: 4,
    height: 36,
    fontSize: 18,
    color: "#D9896C",
    backgroundColor: "#E6BE92",
    borderColor: "#D9896C",
  },

  loginButton: {
    width: 120,
    alignItems: "center",
    padding: 8,
    marginTop: 12,
    marginBottom: 36,
    backgroundColor: "#D9896C",
  },

  buttonText: {
    fontWeight: "500",
    fontSize: 18,
    color: "#D9D1C0",
  },

  
});
