import { Camera, CameraType, FlashMode } from "expo-camera";
import { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import * as FaceDetector from "expo-face-detector";
import * as MediaLibrary from "expo-media-library";

const CameraScreen = ({ setIsHomePage }) => {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { width } = useWindowDimensions();
  const height = Math.round((width * 16) / 9);
  const [flash, setFlash] = useState(FlashMode.off);
  const cameraRef = useRef(null);

  // Tracking faces
  const [detectedFaces, setDetectedFaces] = useState([]);

  // Take picture & save
  const [photoUri, setPhotoUri] = useState("");

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          Nous avons besoin de votre autorisation pour utiliser la caméra
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  const toggleCameraType = () => {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  };

  const toggleFlash = () => {
    setFlash((current) =>
      current === FlashMode.off ? FlashMode.torch : FlashMode.off
    );
  };

  const handleFacesDetected = ({ faces }) => {
    setDetectedFaces(faces);
  };

  const takePicture = () => {
    if (cameraRef.current) {
      cameraRef.current.takePictureAsync({ onPictureSaved: onPictureSaved });
    }
  };

  const onPictureSaved = async (photo) => {
    const hasPermission = await requestMediaLibraryPermission();

    if (hasPermission) {
      setPhotoUri(photo.uri);
      MediaLibrary.saveToLibraryAsync(photo.uri);
      await sleep(6000);
      setPhotoUri("");
    }
  };

  const requestMediaLibraryPermission = async () => {
    if (Platform.OS === "android") {
      const { status } = await MediaLibrary.requestPermissionsAsync();
      return status === "granted";
    } else {
      const { status } = await MediaLibrary.getPermissionsAsync();
      if (status !== "granted") {
        const { status: newStatus } =
          await MediaLibrary.requestPermissionsAsync();
        return newStatus === "granted";
      } else {
        return true;
      }
    }
  };

  return (
    <View style={styles.container}>
      <Camera
        type={type}
        flashMode={flash}
        onFacesDetected={handleFacesDetected}
        ref={cameraRef}
        faceDetectorSettings={{
          mode: FaceDetector.FaceDetectorMode.fast,
          detectLandmarks: FaceDetector.FaceDetectorLandmarks.off,
          runClassifications: FaceDetector.FaceDetectorClassifications.off,
          //minDetectionInterval: 1000,
          tracking: false,
        }}
        ratio="16:9"
        style={{
          height: height,
          width: "100%",
          flex: 1,
        }}
        onCameraReady={() => console.log("Camera is ready")}
        onMountError={(error) => console.log("Camera mount error:", error)}
        onError={(error) => console.log("Camera error:", error)}
        onBarCodeScanned={(data) => console.log("Barcode scanned:", data)}
      >
        {/* {detectedFaces.map((face, index) => (
          <View
            key={index}
            style={{
              width: face.bounds.size.width,
              height: face.bounds.size.height,
              position: "absolute",
              top: face.bounds.origin.y,
              left: face.bounds.origin.x,
              borderRadius: 8,
              backgroundColor: "black",
            }}
          ></View>
        ))} */}
        {photoUri && <Image source={{ uri: photoUri }} style={styles.photo} />}
        <Text style={styles.devMsg}>
          Le floutage est actuellement désactivé.
        </Text>
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
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Image
              style={styles.takePictureLogo}
              source={require("../assets/images/square_circle_line.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
            <Image
              style={styles.cameraFlipLogo}
              source={require("../assets/images/camera_rotate_fill.png")}
            />
          </TouchableOpacity>
          {type === CameraType.back && false && (
            <TouchableOpacity style={styles.button} onPress={toggleFlash}>
              <Image
                style={styles.cameraFlipLogo}
                source={require("../assets/images/flash_fill.png")}
              />
            </TouchableOpacity>
          )}
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
  devMsg: {
    position: "absolute",
    bottom: "15%",
    left: "10%",
    fontSize: 18,
    color: "red",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    //margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    margin: 10,
    //zIndex: 666,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  takePictureLogo: {
    width: 75,
    height: 75,
    resizeMode: "contain",
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
    top: 0,
    left: 0,
    marginTop: 20,
    marginLeft: 10,
  },
  photo: {
    width: 100,
    height: 200,
    resizeMode: "contain",
    position: "absolute",
    bottom: 50,
    right: 0,
    margin: 10,
  },
});

export default CameraScreen;
