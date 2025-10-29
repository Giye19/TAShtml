import { Text, View, Image, StyleSheet,TouchableOpacity} from "react-native";
import React from "react";



const fotos = {
  triste: require("../assets/images/triste.png"),
  feliz: require("../assets/images/feliz.jpg"),
};

export default function Index() {

  const [nombreFoto, setNombreFoto] = React.useState<"triste" | "feliz">("triste");

  const cambiarFoto = () => {
    setNombreFoto(nombreFoto === "triste" ? "feliz" : "triste");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image source={fotos[nombreFoto]} style={styles.imagen} ></Image>
      <TouchableOpacity onPress={cambiarFoto} style={styles.boton}><Text style={styles.textoBoton}>Triste/Feliz</Text></TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({

imagen:{
  height:250,
  width:250,
  marginBottom:30,

},
boton:{
  height:100,
  width:200,
  backgroundColor: "#cdcdcdff",
  alignContent:"center",
  justifyContent:"center",
  borderRadius:10,
},
textoBoton:{
  color:"black",
  fontSize:25,
  fontWeight:"bold",
  textAlign:"center",
}



})


