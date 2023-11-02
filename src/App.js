import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./component/LoginPage/LoginPage";
import SignUpPage from "./component/SignUpPage/SignUpPage";
import HomePage from "./component/HomePage/HomePage";
import Dumpy from "./component/components/js/Dumpy";
import withSplashScreen from "./component/components/js/withSplashScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/homepage" element={<HomePage />} />
        <Route path="/dumpy" element={<Dumpy />} />
      </Routes>
    </>
  );
}

export default withSplashScreen(App);
