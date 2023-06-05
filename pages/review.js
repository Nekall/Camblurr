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
  Dimensions
} from "react-native";
const { width, height } = Dimensions.get('window');

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
        <TouchableOpacity
          onPress={() => setIsReviewPage(false)}
          style={styles.backButton}
        >
          <Text style={styles.backText}>Retour</Text>
        </TouchableOpacity>
        <View style={styles.header}>
          <Image
            style={styles.camblurr}
            source={require("../assets/icons/Camblurr.png")}
          />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>Laisse ton avis !</Text>
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
            style={styles.textArea}
            multiline={true}
            numberOfLines={10}
          />
          <TouchableOpacity
            onPress={() => console.log("send")}
            style={styles.sendButton}
          >
          <View style={styles.sendBox}>
          <Text style={styles.sendText}>Envoyer</Text>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.emailBox}>
          <Text style={styles.emailText} >Vous preferez par email?</Text>
          <Text style={styles.emailText} onPress={() => Linking.openURL("mailto:contact@neka.dev")}>contact@neka.dev</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    flex: 0.8,
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
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#000000c0",
  },
  textArea: {
    height: 150,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: "#000000c0",
    textAlignVertical: "top",
  },
  sendBox: {},
  sendButton: {
    backgroundColor: "#000000c0",
    padding: 2,
    borderRadius: 8,
    margin: 10,
  },
  sendText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  backButton: {
    backgroundColor: "#000000c0",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    borderRadius: 8,
    position: "absolute",
    top: 20,
    right: 20,
    zIndex: 666,
  },
  backText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  emailBox: {
    flex: 0.8,
    justifyContent: "center",
  },
  emailText: {
    fontSize: 16,
    color: "white",
    textAlign: "center",
  },
  footer: {
    flex: 0.5,
    fontSize: 16,
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
