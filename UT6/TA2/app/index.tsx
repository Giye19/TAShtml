import { Text, View, TextInput, StyleSheet, Image } from "react-native";
import React from "react";

export default function Index() {

  const [text, setText] = React.useState("");
  const cambiarTexto = (nuevoTexto:string) => {
    setText(nuevoTexto)};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TextInput onChangeText={cambiarTexto} value={text} style={styles.input} placeholder="Escribe aqui..." placeholderTextColor={"white"}></TextInput>
      <Image source={require("../assets/images/flechadegrade.png")} style={styles.image}/>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}


  const styles = StyleSheet.create(
    {
      input: {
        backgroundColor:"#15acf1ff",
        height:50,
        width:200,
        marginBottom:15,
        textAlign: "center",
        borderRadius: 10,
        marginTop: -75,
        color: "white",

      },
      text: {
        height:50,
        lineHeight:50,
        width:200,
        textAlignVertical: "center",
        textAlign: "center",
        borderRadius: 10,
        marginTop: 15,
        backgroundColor: "#f89717ff"
      },
      image: {
        width:65,
        height:65,
      }
      
    }
  ) 