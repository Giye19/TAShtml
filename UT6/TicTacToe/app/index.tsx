import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

export default function Index() {

  const [turno,setTurno] = React.useState("X")
  const cambiarTurno = () => {
    if (turno==="X"){
      setTurno("O")
    }
    if (turno==="O"){
      setTurno("X")
    }}

  const [tablero, setTablero] = React.useState<(string | null)[]>([
    null, null, null, null, null, null, null, null, null
  ]);
  
  const botonPresionado = (position: number) => {
    const index = position - 1;
    
    if (tablero[index] !== null) return;
    
    setTablero(tablero => 
      tablero.map((cell, i) => i === index ? turno : cell)
    );
    
    cambiarTurno();
    };



  return (
    <View style={styles.maincontainer}>
      <Text style={styles.titulo}>TicTacToe</Text>
      <View style={styles.grid}>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}>X</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}>O</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button}><Text style={styles.tiletext}></Text></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  maincontainer:{
    alignItems:"center",
    justifyContent:"center",

  },
  titulo:{
    color:"black",
    fontWeight:"bold",
    fontSize:50,
    marginBottom:40,
    marginTop:40,
  },
  grid:{
    width: 350,
    height:350,
    justifyContent:"space-between",
    alignContent:"space-between",
    flexWrap:"wrap",
    flexDirection:"row"
  },
  tile:{
    height:100,
    width:100,
    borderRadius:10,
    borderColor:"#c2c2c2ff",
    borderWidth:2,
  },
  tiletext:{
    color:"#ff1717ff",
    fontWeight:"bold",
    fontSize:50,

  },
  button:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
  },


})