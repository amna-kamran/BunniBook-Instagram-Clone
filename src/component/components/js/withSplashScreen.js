import React, { useState, useEffect } from "react";
import logo from "../../../assets/bunnibook.png";
import "../css/splashScreen.css";

function SplashMessage() {
  return (
    <div className="Logo-container">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="lineL" />
      <div className="lineR" />
    </div>
  );
}

const withSplashScreen = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate async tasks with a setTimeout
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }, []);

    // While checking user session, show "loading" message
    if (loading) return SplashMessage();

    // Otherwise, show the desired route (WrappedComponent)
    return <WrappedComponent {...props} />;
  };
};

export default withSplashScreen;
