import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import "./Font.css";
import sparkle from "../../assets/sparkle.png";
import "./TextField.css";

function BunniTextField({ placeholder, type }) {
  const [showIndicator, setShowIndicator] = useState(false);

  const handleFocus = () => {
    setShowIndicator(true);
  };

  const handleBlur = () => {
    setShowIndicator(false);
  };

  return (
    <div className="text-field-container">
      {showIndicator && (
        <img className="indicator-img" src={sparkle} alt="sparkle-img" />
      )}
      <TextField
        className="field"
        sx={{
          border: "4px solid #FFFFFF",
          marginBottom: 2,
          paddingBottom: 3,
          height: 30,
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          "& .MuiOutlinedInput-input": {
            color: "white",
            fontFamily: "CuteBubble",
          },
          "& input::placeholder": {
            color: "#ED5C9D",
            opacity: 1,
          },
        }}
        placeholder={placeholder}
        type={type}
        InputProps={{
          style: {
            width: 250,
            fontFamily: "CuteBubble",
          },
        }}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
}

export default BunniTextField;
