import { View, Image, StyleSheet, Text } from "react-native";



type Props = { descripcion:string, url:any }

export default function Foto({url, descripcion}:Props) 
{

    return(
        <>
        <View style={styles.contenedorFoto}>
            <Image source={url} style={styles.foto}></Image>
        </View>
        <Text style={styles.descripcion}>{descripcion}</Text>
        </>
    );
}

const styles = StyleSheet.create({

    contenedorFoto:{
        marginTop:5,
        borderRadius:10,
        borderWidth:10,
        borderColor:"#000000ff",
        height:250,
        width:250,
        alignSelf:"center"

    },
    foto:{
        width:230,
        height:230,
    },
    descripcion:{
        alignSelf:"center",
        marginTop:15,
        marginBottom:25,
    }


})