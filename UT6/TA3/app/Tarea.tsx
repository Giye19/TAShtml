import { View, StyleSheet, TouchableOpacity, Text} from "react-native";
import eliminarTarea from "./index"


type Props = { nombre:string, onEliminar: ()=>void}

export default function Tarea({nombre, onEliminar}:Props){
    
    return(
        <>
        <View style={styles.contenedor}>
            <Text style={styles.textoTarea}>• {nombre}</Text>
            <TouchableOpacity style={styles.botonEliminar} onPress={onEliminar}><Text style={styles.textoBotonEliminar}>Eliminar</Text></TouchableOpacity>
        </View>
        </>
    );

}

const styles = StyleSheet.create({
    contenedor:{
        flexDirection:"row",
        alignItems:"center",
        height:75,
        borderWidth:2,
        borderColor: "#a1a1a1ff",
        borderRadius:10,
        margin:5,
        marginTop:5,
        justifyContent:"space-between",
    },
    botonEliminar:{
        backgroundColor: "#fc3333ff",
        borderRadius:15,
        alignSelf:"center",
        marginRight:10,
    },
    textoBotonEliminar:{
        color:"white",
        height:40,
        width:75,
        margin: "auto",
        textAlign: "center",
        lineHeight:40,
    },
    textoTarea:{
        marginLeft:10,
        fontSize:15,
    }

})