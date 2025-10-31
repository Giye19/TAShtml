import { Text, View, StyleSheet,TouchableOpacity } from "react-native";
import React from "react";


export default function Index() {

  const caras = ["⚀","⚁","⚂","⚃","⚄","⚅"]

  const [numero,setNumero] = React.useState(1)

  const roll = () => {
    const random = Math.floor(Math.random()*6)
    setNumero(random)
  }


  return (
    <View style={styles.mainContainer}>
        <TouchableOpacity style={styles.dado} onPress={roll}>
          <Text style={styles.dadoTexto}>{caras[numero]}</Text>
        </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

mainContainer:{
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
},
dado:{
  height:175,
  width:175,
  alignItems:"center",
  justifyContent:"center",

  
  
},
dadoTexto:{
  lineHeight:250,
  fontSize:300,
},

})