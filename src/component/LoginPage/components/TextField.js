import React from "react";
import TextField from "@mui/material/TextField";
import "./Font.css";

function LoginTextField({ placeholder, type }) {
  return (
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
    />
  );
}

export default LoginTextField;
