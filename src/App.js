import { Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./component/LoginPage/LoginPage";
import SignUpPage from "./component/SignUpPage/SignUpPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </>
  );
}

export default App;
