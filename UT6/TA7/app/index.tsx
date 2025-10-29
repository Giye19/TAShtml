import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"

export default function Index() {
  const [text, setText] = useState("")
  const [pelicula, setPelicula] = useState<any>(null)
  const [error, setError] = useState("")

  const buscar = async () => {
    if (!text.trim()) return
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(text)}&apikey=226b74d3`)
      const data = await response.json()

      if (data.Response === "False") {
        setError("Película no encontrada")
        setPelicula(null)
      } else {
        setError("")
        setPelicula(data)
      }
    } catch (e) {
      setError("Error al buscar la película")
      setPelicula(null)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Buscar película..."
        value={text}
        onChangeText={setText}
        style={styles.input}
      />
      <TouchableOpacity onPress={buscar} style={styles.botonBuscar}>
        <Text style={styles.textoBoton}>Buscar</Text>
      </TouchableOpacity>

      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : pelicula ? (
        <View style={styles.resultado}>
          {pelicula.Poster !== "N/A" && (
            <Image source={{ uri: pelicula.Poster }} style={styles.poster} />
          )}
          <Text style={styles.titulo}>{pelicula.Title}</Text>
          <Text style={styles.sinopsis}>{pelicula.Plot}</Text>
        </View>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    paddingTop: 60,
  },
  input: {
    width: 300,
    height: 50,
    borderWidth: 1,
    borderColor: "#a5a5a5",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  botonBuscar: {
    height: 45,
    width: 150,
    backgroundColor: "#939390",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  textoBoton: {
    color: "black",
    fontWeight: "bold",
  },
  resultado: {
    alignItems: "center",
    paddingHorizontal: 20,
  },
  poster: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sinopsis: {
    fontSize: 16,
    textAlign: "center",
  },
  error: {
    color: "red",
    fontWeight: "bold",
    marginTop: 20,
  },
})
