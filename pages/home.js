import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ setIsHomePage, setIsReviewPage }) => {
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
          <Text style={styles.baseline}>
            ‒ «Préservez l'anonymat tout en capturant des souvenirs uniques.»
          </Text>
        </View>
        <View style={styles.content}>
          <View style={styles.preview}>
            <Text style={styles.stepsTitle}>Comment ça marche ?</Text>
            <Text style={styles.steps}>① ➞ Je prend une photo</Text>
            <Text style={styles.steps}>② ➞ Les visages sont floutés</Text>
            <Text style={styles.steps}>③ ➞ Je partage sur les réseaux sereinement</Text>
          </View>
          <View style={styles.buttonBox}>
            <TouchableOpacity
              onPress={() => setIsHomePage(false)}
              style={styles.customButton}
            >
              <Image
                style={styles.camera}
                source={require("../assets/images/camera_2_fill.png")}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.reviewButtonBox}>
            <TouchableOpacity
              onPress={() => setIsReviewPage(true)}
              style={styles.reviewButton}
            >
              <Text styles={styles.reviewText}>Donner votre avis</Text>
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
    flex: 1.5,
  },
  camblurr: {
    width: 120,
    height: 100,
    resizeMode: "contain",
    margin: 10,
  },
  baseline: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
    fontStyle: "italic",
    padding: 10,
    margin: 10,
  },
  content: {
    flex: 4,
    justifyContent: "center",
  },
  preview: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    padding: 10,
    margin: 10,
    borderRadius: 8,
    flex: 2,
  },
  stepsTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    paddingVertical: 40,
  },
  steps: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    padding: 15,
  },
  reviewButtonBox: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  reviewButton: {
    backgroundColor: "#000000c0",
    padding: 15,
    borderRadius: 8,
  },
  reviewText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  buttonBox: {
    flex: 0.5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  customButton: {
    backgroundColor: "#000000c0",
    padding: 5,
    borderRadius: 8,
    width: 55,
    height: 55,
  },
  camera: {
    width: 45,
    height: 45,
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

export default HomeScreen;
