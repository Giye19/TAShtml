import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import Tarea from "./Tarea";

export default function Index() {

  const [nuevaTarea,setNuevatarea] = React.useState("");
  const [tareas,setTareas] = React.useState<string[]>([]);

  const actualizarTexto = (nuevaTarea:string) => {
    setNuevatarea(nuevaTarea)};

  const agregarTarea = () => {
    setTareas([...tareas,nuevaTarea])
  }

  const eliminarTarea = (index:number) => {
    const tareasActualizadas = [...tareas];
    tareasActualizadas.splice(index,1);
    setTareas(tareasActualizadas)
  }

  return (
    <>
    <View style={styles.contenedorAgregarTareas}>
      <TextInput style={styles.input} placeholder="Nueva tarea..." placeholderTextColor="white" value={nuevaTarea} onChangeText={actualizarTexto} onEndEditing={(e) => setNuevatarea(e.nativeEvent.text)}></TextInput>
      <TouchableOpacity style={styles.boton}><Text style={styles.textoBoton} onPress={agregarTarea}>Agregar</Text></TouchableOpacity>
    </View>
    <View  style={styles.contenedorTareas}>
    <ScrollView>
      {tareas.map((tarea, index) => (
  <Tarea
    key={index}
    nombre={tarea}
    onEliminar={() => eliminarTarea(index)}
  />
))}

    </ScrollView>
    </View>
  </>
  );
}

const styles = StyleSheet.create({
  contenedorAgregarTareas:{
    flex:1,
    borderRadius:10,
    borderWidth:2 ,
    borderColor: "#a1a1a1ff",
    margin:5,
  },
  contenedorTareas:{
    flex:3,
    borderRadius:10,
    borderWidth:2 ,
    borderColor: "#a1a1a1ff",
    margin:5,
  },
  input:{
    height:100,
    backgroundColor: "#e0ddddff",
    borderRadius:10,
    margin:10,
    fontSize:20,
    textAlign: "center",
  },
  boton:{
    flex:2,
    margin:5,
    height:65,
    backgroundColor: "#008cffff",
    borderRadius:15,
    verticalAlign:"middle",
    justifyContent:"center",
    


  },
  textoBoton:{
    textAlign:"center",
    color:"white",
    fontWeight:"bold",
    fontSize:20,
  }

})