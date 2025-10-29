import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";

export default function Index() {

  const [contador, setContador] = React.useState(0);
  const sumar = () => {
    setContador(contador + 1);
  }
  const restar = () => {
    setContador(contador - 1);
  }

  return (
    <>
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={styles.contador}>{contador}</Text>
      </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 100 }}>
      <TouchableOpacity style={[styles.boton, styles.resta]} onPress={restar}>
        <Text style={styles.textoBoton}>-</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.boton, styles.suma]} onPress={sumar}>
        <Text style={styles.textoBoton}>+</Text>
      </TouchableOpacity>
    </View>
    </>
  );



}

    const styles = StyleSheet.create({
  boton: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textoBoton:{
    color: "white",
    fontWeight: 'bold',
    fontSize: 36,
  },
  resta: {
    backgroundColor: 'red',
  },
  suma: {
    backgroundColor: 'green',
  },
  contador: {
    fontSize: 100,
    fontWeight: 'bold',
  }
});
