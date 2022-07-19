import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar, Bubble, GiftedChat, Send } from "react-native-gifted-chat";
import firebase from "../database/firebaseDB";
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const auth = firebase.auth();
const db = firebase.firestore().collection("messages");

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = db
      .orderBy("createdAt", "desc")
      .onSnapshot((collectionSnapshot) => {
        const messages = collectionSnapshot.docs.map((doc) => {
          const date = doc.data().createdAt.toDate();
          const newDoc = { ...doc.data(), createdAt: date };
          return newDoc;
        });
        setMessages(messages);
      });

    auth.onAuthStateChanged((user) => {
      if (user) navigation.navigate("Chat", { id: user.id, email: user.email});
      else navigation.navigate("Login");
    });
  
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={logout}>
          <MaterialCommunityIcons
            name="logout"
            size={24}
            style={{ color: "#D9D1C0", marginRight: 10 }}
          />
        </TouchableOpacity>
      ),

      headerStyle: {
        backgroundColor: "#D9896C",
      },

      headerTintColor: "#D9D1C0",
      headerTitleStyle: {
        fontSize: 21,
        fontWeight: "bold",
      },
    });
    return unsubscribe;
  }, []);

  const logout = () => auth.signOut();

  // Bubble Styling
  const renderBubble = (props) =>{
    return(
    <Bubble
    {... props}
    wrapperStyle={{ 
      right: {
        backgroundColor: "#E6BE92"
      },
      left: {
        backgroundColor: "#D9D1C0"
      }
    }}
    textStyle={{ 
      right: {
        color: "#1F0802"
      },
      left: {
        color: "#1F0802"
      }
    }}
    />
    );
  }
  
  //Send btn styling
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons 
          name="send-circle" 
          style={{ marginBottom: 5, marginRight: 5, color: "#D9896C"}}
          size={32} />
        </View>
      </Send> 
      
    )
  }
  
  
  function sendMessages(newMessages) {
    console.log(newMessages);
    db.add(newMessages[0]);
  }

  return (
    
    <GiftedChat
      messages={messages}
      onSend={sendMessages}
      listViewProps={{ style: { backgroundColor:"#f2f2f2"}}}
      user={{ _id: auth.currentUser?.uid, name: auth.currentUser?.email 
      }} 
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}      
      />
      
  );
  
}

const styles = StyleSheet.create({});
