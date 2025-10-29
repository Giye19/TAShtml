import { Text, View, ScrollView, StyleSheet } from "react-native";
import Foto from "./FotoGaleria"


export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.tituloGaleria}>Galería de fotos</Text>
      <ScrollView style={styles.galeria}>
        <Foto url={require("../assets/images/fujisan.jpg")} descripcion="Monte Fuji - Yamanashi, Japón."></Foto>
        <Foto url={require("../assets/images/eiffel.avif") }descripcion="Torre Eiffel - París, Francia"></Foto>
        <Foto url={require("../assets/images/pisa.jpg")} descripcion="Torre inclinada de Pisa - Pisa, Italia"></Foto>
        <Foto url={require("../assets/images/piramides.png")} descripcion="Pirámides de Giza - Giza, Egipto"></Foto>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  
  galeria:{
    borderRadius:15,
    borderColor:"#acacacff",
    height:650,
    width:300,
    margin:10,
    backgroundColor:"white"


  },
  tituloGaleria:{
    marginTop:15,
    width:300,
    backgroundColor:"#482c08ff",
    color:"white",
    fontWeight:"bold",
    fontSize:30,
    textAlign:"center",
    borderRadius:10,

  }



})
