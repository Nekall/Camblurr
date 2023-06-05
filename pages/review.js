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
  TextInput,
} from "react-native";
import { useFonts } from "expo-font";

const ReviewScreen = ({ setIsReviewPage }) => {
  const [email, setInputValue] = useState("");
  const [comment, setComment] = useState("");
  
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require("../assets/images/loupe-mono-dark.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.header}>
          <Image
            style={styles.camblurr}
            source={require("../assets/icons/Camblurr.png")}
          />
        </View>

        <View style={styles.content}>
          <Text>Laisse ton avis !</Text>
          <TextInput
            value={email}
            onChangeText={(email) => setInputValue(email)}
            placeholder={"Email"}
            style={styles.input}
          />
          <TextInput
            value={comment}
            onChangeText={(comment) => setComment(comment)}
            placeholder={"Ton commentaire ici..."}
            style={styles.input}
          />
          <TouchableOpacity
              onPress={() => console.log("send")}
              style={styles.backButton}
            >
              <Text styles={styles.backText}>Envoyer</Text>
        </TouchableOpacity>
        </View>


        <TouchableOpacity
              onPress={() => setIsReviewPage(false)}
              style={styles.backButton}
            >
              <Text styles={styles.backText}>Retour</Text>
        </TouchableOpacity>
        <View style={styles.footer}>
          <Text style={styles.stamp}>© Camblurr</Text>
          <Text style={styles.stamp}>
            2023 ―{" "}
            <Text
              style={{ color: "white" }}
              onPress={() => Linking.openURL("https://github.com/Nekall")}
            >
              <Image
                style={styles.githubLogo}
                source={require("../assets/icons/github.png")}
              />
            </Text>
            ―{" "}
            <Text
              style={{ color: "white" }}
              onPress={() => Linking.openURL("https://neka.dev")}
            >
              Neka
            </Text>
          </Text>
        </View>
        <Text style={styles.bannerVersion}>
          camblurr - version 0.0.1 - 06/2023
        </Text>
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
    flex: 1.5,
    // borderColor: "yellow",
    // borderWidth: 2,
  },
  camblurr: {
    width: 120,
    height: 100,
    resizeMode: "contain",
    margin: 10,
  },
  content: {
    flex: 4,
    justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 2,
  },
  backButton: {
    backgroundColor: "#000000c0",
    padding: 15,
    borderRadius: 8,
    //width: 55,
    //height: 55,
  },
  backText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
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
  githubLogo: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
  bannerVersion: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    backgroundColor: "#000000c0",
    fontStyle: "italic",
    padding: 5,
  },
});

export default ReviewScreen;
