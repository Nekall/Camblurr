import { Camera, CameraType } from "expo-camera";
import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
} from "react-native";
import * as FaceDetector from "expo-face-detector";

const CameraScreen = ({ setIsHomePage }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { width } = useWindowDimensions();
  const height = Math.round((width * 16) / 9);

  const [xPosition, setXPosition] = useState("50%");
  const [yPosition, setYPosition] = useState("50%");

  const [heightFace, setHeightFace] = useState(100);
  const [widthFace, setWidthFace] = useState(100);

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

    setXPosition("50%");
    setYPosition("50%");
  }

  const handleFacesDetected = ({ faces }) => {
    if (faces.length > 0) {
      console.log("faces", faces);

      const face = faces[0];
      const { bounds } = face;
      console.log("bounds", bounds);

      setXPosition(bounds.origin.y);
      setYPosition(bounds.origin.x);
      setHeightFace(bounds.size.height);
      setWidthFace(bounds.size.width);

    }
  };

  return (
    <View style={styles.container}>
      <Camera
        type={type}
        onFacesDetected={handleFacesDetected}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.all,
          runClassifications: FaceDetector.FaceDetectorClassifications.all,
          minDetectionInterval: 100,
          tracking: true,
        }}
        ratio="16:9"
        style={{
          height: height,
          width: "100%",
          flex: 1,
        }}
      >
        <View
          style={{
            width: widthFace,
            height: heightFace,
            borderColor: "red",
            borderWidth: 1,
            position: "absolute",
            top: xPosition,
            left: yPosition,
          }}
        ></View>
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
