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
  

  const [visible, setVisible] = React.useState(false)


  const [ganador,setGanador] = React.useState("")
  const checkWin = (board: (string | null)[]): "X" | "O" | null => {
  const ganadores = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const [a, b, c] of ganadores) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a] as "X" | "O";
    }
  }
  return null;
};


    React.useEffect(() => {
  const posibleGanador = checkWin(tablero);
  if (posibleGanador) {
    setGanador(posibleGanador)
    setVisible(true)
  }
}, [tablero]);



  const botonPresionado = (position: number) => {
  const index = position - 1;
  if (ganador !== "") return;
  if (tablero[index] !== null) return;

  setTablero(prev => prev.map((cell, i) => (i === index ? turno : cell)));
  cambiarTurno();
};



    const reset = () => {
      setTablero([null,null,null,null,null,null,null,null,null])
      setTurno("X")
      setGanador("")
      setVisible(false)
    }


  return (
    <View style={styles.maincontainer}>
      <Text style={styles.titulo}>TicTacToe</Text>
      <View style={styles.grid}>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(1)}><Text style={styles.tiletext}>{tablero[0]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(2)}><Text style={styles.tiletext}>{tablero[1]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(3)}><Text style={styles.tiletext}>{tablero[2]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(4)}><Text style={styles.tiletext}>{tablero[3]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(5)}><Text style={styles.tiletext}>{tablero[4]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(6)}><Text style={styles.tiletext}>{tablero[5]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(7)}><Text style={styles.tiletext}>{tablero[6]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(8)}><Text style={styles.tiletext}>{tablero[7]}</Text></TouchableOpacity>
        </View>
        <View style={styles.tile}>
            <TouchableOpacity style={styles.button} onPress={() => botonPresionado(9)}><Text style={styles.tiletext}>{tablero[8]}</Text></TouchableOpacity>
        </View>
      </View>
      <Text style={[styles.textoGanador, { opacity: visible ? 1 : 0 }]}>Ganador: {ganador}</Text>
      <TouchableOpacity onPress={reset} style={styles.reset}><Text style={styles.textoReset}>Reset</Text></TouchableOpacity>
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
  reset:{
    width:200,
    height:100,
    backgroundColor:"red",
    
    borderRadius:25,
    alignItems:"center",
    justifyContent:"center",
  },
  textoReset:{
    color:"white",
    fontWeight:"bold",
    fontSize:35,
  },
  textoGanador:{
    marginTop:50,
    marginBottom:50,
    fontSize:35,
    color:"black",
    opacity:0,
  }


})