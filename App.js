import { useState } from "react";

// Components
import HomeScreen from "./pages/home";
import CameraScreen from "./pages/camera";
import ReviewScreen from "./pages/review";

const App = () => {
  const [isHomePage, setIsHomePage] = useState(true);
  const [isReviewPage, setIsReviewPage] = useState(false);

  return isHomePage ? (
    isReviewPage ? (
      <ReviewScreen setIsReviewPage={setIsReviewPage} />
    ) : (
      <HomeScreen
        setIsHomePage={setIsHomePage}
        setIsReviewPage={setIsReviewPage}
      />
    )
  ) : (
    <CameraScreen setIsHomePage={setIsHomePage} />
  );
};

export default App;
