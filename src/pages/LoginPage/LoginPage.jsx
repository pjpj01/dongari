import HeaderComponent from "../../components/HeadComponent/HeadComponent";
import "./LoginPage.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FooterComponent from "../../components/FooterComponent/FooterComponent";

function LoginPage() {
  const [isChecked, setIsChecked] = useState(false);
  const [username, setUsername] = useState("");

  // 컴포넌트가 마운트될 때 로컬 스토리지에서 아이디를 불러옴
  useEffect(() => {
    const savedUsername = localStorage.getItem("username");
    if (savedUsername) {
      setUsername(savedUsername);
      setIsChecked(true);
    }
  }, []);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (!isChecked) {
      localStorage.setItem("username", username); // 아이디 저장
    } else {
      localStorage.removeItem("username"); // 아이디 삭제
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };
  return (
    <div>
      <HeaderComponent headerText="로그인" bannerText="로그인" />
      <div className="container">
        <div className="login-box">
          <p className="login">로그인</p>
          <p className="info">가입하신 아이디와 패스워드를 입력해주세요</p>
          <input
            type="text"
            className="id-input"
            placeholder="아이디를 입력하세요"
          />
          <input
            type="text"
            className="pw-input"
            placeholder="비밀번호를 입력하세요"
          />
          <div className="save-container">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span>아이디 저장하기</span>
          </div>
          <button className="login-click">로그인</button>
          <div className="container1">
            <button className="find">아이디/비밀번호 찾기</button>
            <Link to="/signup">
              <button className="signup">회원가입</button>
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}

export default LoginPage;
