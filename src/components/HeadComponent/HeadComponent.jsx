import React from "react";
import "./HeadComponent.css"; // HeaderComponent.css 파일을 import
import logo from "./yonsei logo 1.png";
import person from "./person.png";
import banner from "./yonsei_header.png";

function HeaderComponent(props) {
  return (
    <div>
      <div className="header">
        <img src={logo} alt="Yonsei Logo" className="logo" />
        <div className="login-container">
          <button className="myInfo">
            <img src={person} alt="person" className="person" />
          </button>
          <button className="loginLink">로그인</button>
        </div>
      </div>
      <div className="navigation">
        <img src={banner} alt="yonsei background" className="banner" />
        <div className="banner-text"> {props.bannerText} </div>
      </div>
    </div>
  );
}

export default HeaderComponent;
