import { View, StyleSheet, Text } from "react-native";
import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

type Props = { nombre: string; onEliminar: () => void };

export default function Tarea({ nombre, onEliminar }: Props) {
  const renderRightActions = () => (
    <View style={styles.rightAction}>
      <Text style={styles.textoEliminar}>Eliminar</Text>
    </View>
  );

  return (
    <Swipeable
      renderRightActions={renderRightActions}
      onSwipeableOpen = {onEliminar}
    >
      <View style={styles.contenedor}>
        <Text style={styles.textoTarea}>• {nombre}</Text>
      </View>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flexDirection: "row",
    alignItems: "center",
    height: 75,
    borderWidth: 2,
    borderColor: "#a1a1a1ff",
    borderRadius: 10,
    margin: 5,
    backgroundColor: "white",
    paddingHorizontal: 10,
  },
  rightAction: {
    flex: 1,                
    backgroundColor: "#fc3333ff",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
  textoEliminar: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  textoTarea: {
    fontSize: 15,
  },
});