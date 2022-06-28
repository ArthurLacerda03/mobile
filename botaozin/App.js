import React from "react";
import { StyleSheet, Text, View } from "react-native";

const App = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Botãoooooooooo</Text>
    <Text style={styles.body}>To aqui fazendo aquele teste maroto que todos conhecem. Vi que ja foi testado e o texto foi escrito. uhul</Text>
  </View>
  
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea"
  },
  title: {
    marginTop: 5,
    paddingVertical: 3,
    borderWidth: 2,
    borderColor: "#20232a",
    borderRadius: 100,
    backgroundColor: "#42b0f5",
    color: "#20232a",
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold"
  },
  body: {
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 100,

  }
});

export default App;
