import { useState } from "react";

// Components
import HomeScreen from "./pages/home";
import CameraScreen from "./pages/camera";

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);

  return isHomePage ? (
    <HomeScreen setIsHomePage={setIsHomePage} />
  ) : (
    <CameraScreen setIsHomePage={setIsHomePage} />
  );
};

export default App;
