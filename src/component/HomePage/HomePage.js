import React from "react";
import { Avatar, Card, Divider } from "@mui/material";
import "./HomePage.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TryIcon from "@mui/icons-material/Try";
import myImage from "../../assets/bunnibook.png";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReplyTwoToneIcon from "@mui/icons-material/ReplyTwoTone";
import BunniTextField from "../components/TextField";
function HomePage() {
  const usernames = ["User1", "User2", "User3"];

  return (
    <div className="home-container">
      <img src={myImage} className="homepage-logo" alt="Logo" />
      <BunniTextField className="search-bar" placeholder={"Search"} />
      <Divider className="divider" />
      <div className="card-container">
        {usernames.map((username, index) => (
          <Card key={index} className="card">
            <div className="card-container">
              <div className="avatar-container">
                <Avatar
                  style={{ height: 30, width: 30 }}
                  src={
                    "https://th.bing.com/th/id/OIP.8CYAAo_mnvvKWTbUhNO2PAHaHa?pid=ImgDet&rs=1"
                  }
                />
                <span className="username">{username}</span>
              </div>
              <Divider className="divider" />
              <div className="main-img-div">
                <img
                  className="main-img"
                  src="https://th.bing.com/th/id/R.0c610801eb343fa194f49676870ff615?rik=N2ZjZ5V1YYWxbA&pid=ImgRaw&r=0"
                ></img>
              </div>
              <div className="tags">
                <FavoriteBorderIcon className="icon" />
                <TryIcon className="icon" />
                <ReplyTwoToneIcon className="icon" />
                <div className="space"></div>
                <BookmarkBorderIcon className="icon" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default HomePage;
