import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";

const CameraScreen = ({ setIsHomePage }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  return (
    <View style={styles.container}>
      <Camera style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsHomePage(true)}
          >
            <Image
              style={styles.cameraFlipLogo}
              source={require("../assets/images/home_3_fill.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Image
              style={styles.cameraFlipLogo}
              source={require("../assets/images/camera_rotate_fill.png")}
            />
          </TouchableOpacity>
        </View>
        <Image
          style={styles.camblurrLogo}
          source={require("../assets/icons/Cam-blurr.png")}
        />
      </Camera>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
    borderWidth: 1,
    borderColor: "grey",
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  cameraFlipLogo: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  camblurrLogo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: 0,
    marginRight: 10,
  },
});

export default CameraScreen;
