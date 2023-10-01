import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Card } from "@mui/material";

function HomePage() {
  return (
    <div className="home-container">
      <Navbar />

      <div>
        <Card className="card">Post Card</Card>
      </div>
    </div>
  );
}

export default HomePage;
