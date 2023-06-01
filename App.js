import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  Alert,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("./assets/images/loupe-mono-dark.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <Text style={styles.title}>Camblurr</Text>
          <Text style={styles.baseline}>
            Préservez l'anonymat tout en capturant des souvenirs uniques.
          </Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.detail}>⚠️ In progress... ⚠️</Text>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              onPress={() => Alert.alert("En developpement ;)")}
              style={styles.customButton}
            >
              <Image
                style={styles.camera}
                source={require("./assets/images/camera.png")}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.footer}>
          <Text style={styles.stamp}>© Camblurr</Text>
          <Text style={styles.stamp}>
            2023 ―{" "}
            <Text
              style={{ color: "white" }}
              onPress={() => Linking.openURL("https://github.com/Nekall")}
            >
              <Image
                style={styles.github}
                source={require("./assets/icons/github.svg")}
              />
              Neka
            </Text>
          </Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

// const [loaded] = useFonts({
//   Raleway: require("./assets/fonts/Raleway/Raleway-Regular.ttf"),
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "black",
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 1,
    // borderColor: "yellow",
    // borderWidth: 2,
  },
  title: {
    //flex: 1,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    margin: 10,
  },
  baseline: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    backgroundColor: "#000000c0",
    borderRadius: 8,
    padding: 10,
    margin: 10,
  },
  content: {
    flex: 4,
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  detail: {
    //display: "none",
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    padding: 10,
    margin: 10,
    borderRadius: 8,
  },
  buttonBox: {
    flex:0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  customButton: {
    backgroundColor: "#000000c0",
    padding: 10,
    borderRadius: 24,
    width: 105,
    height: 105,
  },
  camera: {
    width: 85,
    height: 85,
  },
  footer: {
    flex: 0.5,
    fontSize: 16,
    // borderColor: "orange",
    // borderWidth: 2,
  },
  stamp: {
    color: "white",
    textAlign: "center",
  },
  github: {
    width: 20,
    height: 20,
    marginRight: 5,
    marginBottom: -5,
    borderWidth: 2,
    borderColor: "red",
  },
});

export default App;
